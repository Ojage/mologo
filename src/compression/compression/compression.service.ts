
import { Injectable, BadRequestException } from '@nestjs/common';
import sharp  from 'sharp';


@Injectable()
export class CompressionService {
  async compressPNG(file) {
    if (!file.buffer) {
      throw new BadRequestException('Invalid file data');
    }
    const result = await sharp(file.buffer)
      .resize({ width: 800 })
      .toFormat('png')
      .toBuffer();
    return result;
  }

  async compressJPEG(file) {
    if (!file.buffer) {
      throw new BadRequestException('Invalid file data');
    }
    const result = await sharp(file.buffer)
      .resize({ width: 800 })
      .toFormat('jpeg')
      .toBuffer();
    return result;
  }

  async compressWEBP(file) {
    if (!file.buffer) {
      throw new BadRequestException('Invalid file data');
    }
    const result = await sharp(file.buffer)
      .resize({ width: 800 })
      .toFormat('webp')
      .toBuffer();
    return result;
  }
}
