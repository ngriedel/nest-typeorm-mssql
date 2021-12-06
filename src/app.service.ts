import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getProfile(): string {
    return 'Hello World!';
  }
}
