import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import books from 'src/shared/initialBookData';
import { TagsService } from '../tags/tags.service';
import { NormalException } from 'src/exception';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
    private tagService: TagsService,
  ) {}

  private _generatePointDecimal() {
    const min = 1;
    const max = 10;
    const decimalPlaces = 2;
    const randomNumber = Math.random() * (max - min) + min;
    const roundedNumber = Number(randomNumber.toFixed(decimalPlaces));
    return roundedNumber;
  }

  private _generateRandomNumberUpTo(max: number): number {
    return Math.floor(Math.random() * (max + 1));
  }

  async findOne(bookId: string) {
    const book = await this.bookRepository.findOne({ uuid: bookId });
    return book;
  }

  async initialBookData() {
    const initialData = books;
    const bookDbs = await this.bookRepository.find();

    if (bookDbs.length) {
      throw NormalException.UNEXPECTED('initial data has been carried out');
    }

    const tags = await this.tagService.findAllTags();

    for (let i = 0; i < initialData.length; i++) {
      const book = initialData[i];
      const newBook = this.bookRepository.create({
        ...book,
        point: this._generatePointDecimal(),
      });

      const bookTags = [];
      const tagFounded = {};
      let tagIdx = this._generateRandomNumberUpTo(tags.length - 1);

      if (tagFounded[tagIdx]) tagIdx += 1;

      if (tags[tagIdx]) {
        bookTags.push(tags[tagIdx]);
        tagFounded[tagIdx] = true;
      }

      newBook.tags = bookTags;

      await this.bookRepository.save(newBook);
    }

    return 'success import data';
  }

  async findAllBooks(
    skip = 0,
    tags?: string,
    search?: string,
  ): Promise<{ result: Book[]; hasMore: boolean }> {
    const take = 20;

    let query = this.bookRepository
      .createQueryBuilder('book')
      .leftJoinAndSelect('book.tags', 'tag');

    const tagsName = tags ? tags.split(',') : [];

    if (tagsName && tagsName.length > 0) {
      const filterTag = tagsName.map((el: string) => el.replaceAll('-', ' '));
      query = query.andWhere('tag.name IN (:...tags)', { tags: filterTag });
    }

    if (search) {
      query = query.andWhere('book.title ILIKE :search', {
        search: `%${search}%`,
      });
    }

    const totalData = await query.getCount();

    query = query.skip(skip).take(take).orderBy('book.created_at', 'DESC');

    const data = await query.getMany();

    return {
      result: data,
      hasMore: data.length !== 0 && totalData > data.length,
    };
  }
}
