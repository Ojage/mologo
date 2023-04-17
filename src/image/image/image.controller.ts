import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';
import * as sharp from 'sharp';

@Controller('image')
export class ImageController {
  @Get(':filename')
  async compressImage(@Param('filename') filename: string, @Res() res: Response) {
    const inputPath = path.join(__dirname, '..', 'public', filename);
    const outputPath = path.join(__dirname, '..', 'public', 'compressed', filename);

    await sharp(inputPath)
      .png({ quality: 80, compressionLevel: 6 })
      .toFile(outputPath);

    return res.sendFile(outputPath);
  }
}
