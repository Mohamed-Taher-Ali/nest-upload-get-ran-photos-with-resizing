import { IImage, IResizeParams } from "./image.types";
import { HttpStatus, Injectable } from "@nestjs/common";
import { throwHttpException } from "../utils/helpers";
import { ErrorMessages } from "../app-configs/error-messages";

var im = require('imagemagick');


@Injectable()
export class ImageMagickStrategyService implements IImage {

    resizeTo(input: IResizeParams): void {
        
        im.identify(input.srcPath, function (err, features) {
            const
                width = features.width,
                height = features.height;

            throwHttpException(
                !!err,
                ErrorMessages.IMAGE_RESIZING_ERROR,
                HttpStatus.FAILED_DEPENDENCY
            );

            if (
                width <= input.maxWidth &&
                height <= input.maxHeight
            ) return;

            im.resize({
                srcPath: input.srcPath,
                dstPath: input.dstPath,
                width: width > input.maxWidth ? input.maxWidth : width,
                height: height > input.maxHeight ? input.maxHeight : height,
            }, function (err, stdout, stderr) {
                throwHttpException(
                    !!err,
                    ErrorMessages.IMAGE_RESIZING_ERROR,
                    HttpStatus.FAILED_DEPENDENCY
                );

                console.log('resizing succeeded');
            });

        });
    }
}