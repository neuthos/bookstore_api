import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './entites/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':userId')
  async findOne(@Param('userId') userId: string): Promise<{ data: User }> {
    const user = await this.userService.findOne(userId);
    return { data: user };
  }

  @Post('join')
  async loginRegisterUser(@Body() body: { username: string }): Promise<User> {
    return this.userService.loginOrRegisterUser(body.username);
  }
}
