import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(User)
    private testRepository: Repository<User>,
  ) {}

  async getUserWithProfile(id: string): Promise<User> {
    const user = await this.testRepository
      .createQueryBuilder('user')
      .where('user.id = :id', { id })
      .leftJoinAndSelect('user.profile', 'profile')
      .leftJoinAndSelect('profile.attributes', 'attrs')
      .getOne();

    return user;
  }
}
