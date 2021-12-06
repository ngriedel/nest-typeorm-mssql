import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('test')
export class TestController {
  constructor(
    private readonly _testService: TestService,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  @Get()
  getProfile(): Promise<User> {
    const uid = '1';
    return this._testService.getUserWithProfile(uid);
  }
}
