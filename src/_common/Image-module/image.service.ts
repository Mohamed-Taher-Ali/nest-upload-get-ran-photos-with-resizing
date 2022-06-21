import { IImage, IResizeParams } from "./image.types";
import { Injectable } from "@nestjs/common";
import { ImageContext } from "./image-context.service";
import { ImageMagickStrategyService } from "./image-magick-strategy.service";

@Injectable()
export class ImageService implements IImage {
    private strategy: IImage;

    constructor(
        private readonly imageMagickStrategy: ImageMagickStrategyService
    ){
        this.strategy = new ImageContext(imageMagickStrategy);
    }

    resizeTo(input: IResizeParams): void {
        this.strategy.resizeTo(input);
    }
}