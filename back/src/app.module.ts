import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Page3Module } from './page3/page3.module';
import { ConfigModule } from '@nestjs/config';
import { Page2Module } from './page2/page2.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    Page2Module,
    Page3Module
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
