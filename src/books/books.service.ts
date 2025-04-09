import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './schemas/book.schema';
import { CreateBookDto, UpdateBookDto, FilterBookDto } from './dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(dto: CreateBookDto) {
    const book = new this.bookModel(dto);
    return book.save();
  }

  async findAll(filter: FilterBookDto) {
    const query: any = {};
    if (filter.author) query.author = filter.author;
    if (filter.category) query.category = filter.category;
    if (filter.rating) query.rating = { $gte: filter.rating };
    if (filter.title) query.title = { $regex: filter.title, $options: 'i' };

    return this.bookModel.find(query);
  }

  async findById(id: string) {
    const book = await this.bookModel.findById(id);
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  async update(id: string, dto: UpdateBookDto) {
    const book = await this.bookModel.findByIdAndUpdate(id, dto, { new: true });
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  async delete(id: string) {
    const result = await this.bookModel.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Book not found');
    return { message: 'Book deleted' };
  }
}
