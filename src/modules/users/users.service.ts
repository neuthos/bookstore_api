import { Repository } from 'typeorm';
import { User } from './entites/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NormalException } from 'src/exception';

export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne(userId: string) {
    const data = await this.userRepository.findOne({ uuid: userId });
    return data;
  }

  async deductUserPoint(user: User, deductPoint: number) {
    if (!user) throw NormalException.NOTFOUND('user not found');
    const userPoint = +user.point;
    const userHasEnoughPoint = userPoint >= deductPoint;

    if (!userHasEnoughPoint) {
      throw NormalException.NOTFOUND('insufficient balance');
    }

    user.point = userPoint - deductPoint;
    return this.userRepository.save(user);
  }

  async addUserPoint(user: User, addPoint: number) {
    if (!user) throw NormalException.NOTFOUND('user not found');
    const userPoint = +user.point;

    user.point = userPoint + addPoint;
    return this.userRepository.save(user);
  }

  async loginOrRegisterUser(username: string): Promise<User> {
    let user = await this.userRepository.findOne({ where: { username } });

    if (!user) {
      user = new User();
      user.username = username;
      user.point = 100;
      await this.userRepository.save(user);
    }

    return user;
  }
}
