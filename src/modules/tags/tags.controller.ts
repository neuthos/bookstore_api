import { Controller, Get } from '@nestjs/common';
import { Tag } from './entites/tag.entity';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagService: TagsService) {}

  @Get()
  async getAllTags(): Promise<Tag[]> {
    return this.tagService.findAllTags();
  }
}
