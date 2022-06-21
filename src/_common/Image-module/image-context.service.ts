import { IImage, IResizeParams } from "./image.types";


export class ImageContext implements IImage {
    strategy: IImage;

    constructor(
        private readonly imageStrategy: IImage
    ){
        this.strategy = imageStrategy;
    }

    resizeTo(input: IResizeParams): void {
        this.strategy.resizeTo(input);
    }
}