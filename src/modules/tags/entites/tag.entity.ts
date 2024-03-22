import { Book } from 'src/modules/books/entities/book.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @ManyToMany(() => Book)
  books: Book[];
}
