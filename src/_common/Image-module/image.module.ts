import { ImageMagickStrategyService } from './image-magick-strategy.service';
import { ImageService } from './image.service';
import { Module } from '@nestjs/common';


@Module({
  providers: [
    ImageService,
    ImageMagickStrategyService,
  ],
  exports: [ImageService]
})
export class ImageModule {}
