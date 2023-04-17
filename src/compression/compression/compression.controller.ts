import { Response } from 'express';
import { Controller, Post, UploadedFile, UseInterceptors, BadRequestException, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CompressionService } from './compression.service';

@Controller('compress')
export class CompressionController {
    constructor(private compressionService: CompressionService) { }

    @Post('jpeg')
    @UseInterceptors(FileInterceptor('file'))
    async compressJPEG(@UploadedFile() file, @Res() response: Response): Promise<any> {
        if (!file) {
            throw new BadRequestException('No file uploaded');
        }
        try {
            response.setHeader('Content-Type', `application/jpeg`);
            response.setHeader('Content-Disposition', `attachment; filename=compressed.jpg`);
            response.send(await this.compressionService.compressJPEG(file));
        } catch (error) {
            console.error(error);
            throw new BadRequestException('Invalid input');
        }
    }

    @Post('png')
    @UseInterceptors(FileInterceptor('file'))
    async compressPNG(@UploadedFile() file, @Res() response: Response): Promise<any> {
        if (!file) {
            throw new BadRequestException('No file uploaded');
        }
        try {
            response.setHeader('Content-Type', 'application/png');
            response.setHeader('Content-Disposition', `attachment; filename=${file.originalname.split('.')[0]}-compressed.png}`);
            response.send(await this.compressionService.compressPNG(file))
        } catch (error) {
            console.error(error);
            throw new BadRequestException('Invalid input');
        }
    }

    @Post('webp')
    @UseInterceptors(FileInterceptor('file'))
    async compressWEBP(@UploadedFile() file, @Res() response: Response): Promise<any> {
        if (!file) {
            throw new BadRequestException('No file uploaded');
        }
        try {
            response.setHeader('Content-Type', 'application/webp');
            response.setHeader('Content-Disposition', `attachment; filename=${file.originalname.split('.')[0]}-compressed.webp}`);
            response.send(await this.compressionService.compressWEBP(file))
        } catch (error) {
            console.error(error);
            throw new BadRequestException('Invalid input');
        }
        return this.compressionService.compressWEBP(file);
    }
}
