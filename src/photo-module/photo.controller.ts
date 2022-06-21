import { Controller, Get, Post, Req, UploadedFile } from '@nestjs/common';
import { PhotoInterceptor } from 'src/_common/interceptors/photo-interceptor';
import { PhotoService } from './photo.service';
import { PhotoDTO } from './photo.types';
import { Request } from 'express';
import { config } from 'src/_common/app-configs/config';


@Controller('/photos')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get('/random')
  async getPhoto(@Req() req: Request): Promise<PhotoDTO> {
    return await this.photoService.getRandomPhotoAbsPath(req);
  }

  @Post('upload')
  @PhotoInterceptor("photo", `./${config.uploadsDir}`)
  async uploadPhoto(@UploadedFile() file: Express.Multer.File): Promise<void> {
    await this.photoService.uploadPhoto(file);
  }

}
