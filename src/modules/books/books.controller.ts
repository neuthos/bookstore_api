import { Controller, Get, Query } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  listBooks(@Query() query: { skip?: number; tags?: string; search?: string }) {
    return this.booksService.findAllBooks(
      +query.skip || undefined,
      query.tags || undefined,
      query.search || undefined,
    );
  }

  @Get('initial')
  initial() {
    return this.booksService.initialBookData();
  }
}
