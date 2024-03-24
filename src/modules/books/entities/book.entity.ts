import { OrderDetail } from 'src/modules/orders/entities/order-detail.entity';
import { Tag } from 'src/modules/tags/entites/tag.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  author: string;

  @Column({ type: 'text', nullable: false })
  cover_image: string;

  @Column('decimal', { precision: 20, scale: 2 })
  point: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updated_at: Date;

  @ManyToMany(() => Tag)
  @JoinTable({
    name: 'book_tags',
    joinColumn: {
      name: 'book_id',
      referencedColumnName: 'uuid',
    },
    inverseJoinColumn: {
      name: 'tag_id',
      referencedColumnName: 'uuid',
    },
  })
  tags: Tag[];

  @OneToMany(() => OrderDetail, (order) => order.book)
  orderDetails: OrderDetail[];
}
