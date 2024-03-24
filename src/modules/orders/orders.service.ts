import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  EntityManager,
  Repository,
  Transaction,
  TransactionManager,
} from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderDetail } from './entities/order-detail.entity';
import { BooksService } from '../books/books.service';
import { NormalException } from 'src/exception';
import { UsersService } from '../users/users.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,

    @InjectRepository(OrderDetail)
    private readonly orderDetailRepo: Repository<OrderDetail>,

    private bookService: BooksService,
    private userService: UsersService,
  ) {}

  async _generateRandomInvoice(): Promise<string> {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const datePart = `${year}${month}${day}`;

    const transactionCount = await this.orderRepo.count();
    const randomPart = Math.floor(Math.random() * 1000000000)
      .toString()
      .padStart(9, '0');

    const invoice = `INV${datePart}${transactionCount}${randomPart}`;

    return invoice;
  }

  @Transaction({ isolation: 'SERIALIZABLE' })
  async create(
    userId: string,
    bookId: string,
    @TransactionManager() entityManager?: EntityManager,
  ): Promise<Order> {
    const book = await this.bookService.findOne(bookId);

    if (!book) {
      throw NormalException.NOTFOUND('book not found');
    }

    const user = await this.userService.findOne(userId);
    if (!user) {
      throw NormalException.NOTFOUND('user not found');
    }

    const userPoint = +user.point;
    const bookPrice = +book.point;
    const userHasEnoughPoint = userPoint >= bookPrice;

    if (!userHasEnoughPoint) {
      throw NormalException.NOTFOUND('insufficient point');
    }

    const order = new Order();
    order.uuid = uuidv4();
    order.user = user;
    order.invoice_code = await this._generateRandomInvoice();
    order.total = bookPrice;
    await entityManager.save(order);

    const orderDetail = new OrderDetail();
    orderDetail.order = order;
    orderDetail.book = book;
    orderDetail.book_price = bookPrice;
    await entityManager.save(orderDetail);

    return order;
  }

  async getUserOrders(userId: string, status?: string): Promise<Order[]> {
    const whereOptions = { user: { uuid: userId }, status: undefined };

    if (status) whereOptions.status = status;
    return this.orderRepo.find({
      where: whereOptions,
      order: { created_at: 'DESC' },
      relations: [
        'orderDetails',
        'orderDetails.book',
        'orderDetails.book.tags',
      ],
    });
  }

  async updateOrderStatus(
    orderId: string,
    newStatus: 'PENDING' | 'SUCCESS' | 'FAILED',
  ): Promise<Order> {
    const order = await this.orderRepo.findOne(orderId);
    if (!order) throw new Error('Order not found');

    if (order.status !== 'PENDING') {
      throw new Error('Cannot update order status, order is not pending');
    }

    const user = await this.userService.findOne(order.user_id);
    order.status = newStatus;

    if (order.status === 'SUCCESS') {
      await this.userService.deductUserPoint(user, +order.total);
      order.is_paid = true;
    }

    return this.orderRepo.save(order);
  }
}
