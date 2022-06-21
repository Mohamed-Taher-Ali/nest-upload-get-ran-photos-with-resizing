import { Module } from '@nestjs/common';
import { ImageModule } from 'src/_common/Image-module/image.module';
import { PhotoController } from './photo.controller';
import { Photo } from './photo.model';
import { PhotoService } from './photo.service';

@Module({
  imports: [ImageModule],
  controllers: [PhotoController],
  providers: [PhotoService, Photo],
  exports: [PhotoService]
})
export class PhotoModule {}
