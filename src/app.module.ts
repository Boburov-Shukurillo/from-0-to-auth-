import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'; // Import MongooseModule
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from './shared/shared.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    SharedModule, // MongoDB connection string
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
