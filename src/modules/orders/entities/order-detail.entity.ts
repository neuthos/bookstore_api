import { Book } from 'src/modules/books/entities/book.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Order } from './order.entity';

@Entity('order_details')
export class OrderDetail {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ name: 'order_id', type: 'uuid', nullable: true })
  order_id: string;

  @Column({ name: 'book_id', type: 'uuid', nullable: true })
  book_id: string;

  @ManyToOne(() => Book, (book) => book.orderDetails)
  @JoinColumn({ name: 'book_id' })
  book: Book;

  @ManyToOne(() => Order, (order) => order.orderDetails)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column('decimal', { precision: 20, scale: 2 })
  book_price: number;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
