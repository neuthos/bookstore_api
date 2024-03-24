import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderDetail } from './entities/order-detail.entity';
import { BooksService } from '../books/books.service';
import { UsersService } from '../users/users.service';
import { Book } from '../books/entities/book.entity';
import { User } from '../users/entites/users.entity';
import { Tag } from '../tags/entites/tag.entity';
import { TagsService } from '../tags/tags.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderDetail, Book, User, Tag])],
  controllers: [OrdersController],
  providers: [OrdersService, BooksService, UsersService, TagsService],
})
export class OrdersModule {}
