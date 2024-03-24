import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @Get('user/:userId')
  async getUserOrders(
    @Param('userId') userId: string,
    @Query('status') status?: string,
  ) {
    return this.orderService.getUserOrders(userId, status);
  }

  @Post()
  async createOrder(@Body() body: { userId: string; bookId: string }) {
    const order = await this.orderService.create(body.userId, body.bookId);
    return { msg: 'Order created successfully', order };
  }

  @Put(':orderId/status')
  async updateOrderStatus(
    @Param('orderId') orderId: string,
    @Body('status') newStatus: 'PENDING' | 'SUCCESS' | 'FAILED',
  ) {
    const order = await this.orderService.updateOrderStatus(orderId, newStatus);
    return { msg: 'Order status updated successfully', data: order };
  }
}
