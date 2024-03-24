import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { TagsService } from '../tags/tags.service';
import { Tag } from '../tags/entites/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Tag])],
  controllers: [BooksController],
  providers: [BooksService, TagsService],
})
export class BooksModule {}
