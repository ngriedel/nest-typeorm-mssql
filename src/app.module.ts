import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './db/test.module';

@Module({
  imports: [
    TestModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'SA',
      password: 'Admin@admin123',
      database: 'TestDB',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      options: { encrypt: false },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
