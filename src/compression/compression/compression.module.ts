import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CompressionController } from './compression.controller';
import { CompressionService } from './compression.service';

@Module({
  imports: [
  ],
  controllers: [CompressionController],
  providers: [CompressionService],
})
export class CompressionModule { }
