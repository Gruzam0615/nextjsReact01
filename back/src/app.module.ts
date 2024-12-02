import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Page1Module } from './page1/page1.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    Page1Module
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
