import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CompressionController } from './compression/compression/compression.controller';
import { CompressionModule } from './compression/compression/compression.module';

import { CompressionService } from './compression/compression/compression.service';


@Module({
  imports: [CompressionModule],
  controllers: [CompressionController],
  providers: [CompressionService],
})
export class AppModule { }
