import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Page3Module } from './page3/page3.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    Page3Module
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
