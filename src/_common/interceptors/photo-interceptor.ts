import { FileInterceptor } from "@nestjs/platform-express";
import { UseInterceptors } from "@nestjs/common";

const path = require('path');

export const allowedExs = [
    'jpg',
    'png',
    'jpeg',
];

export const PhotoInterceptor = (fieldName: string, dest: string) => (
    UseInterceptors(
        FileInterceptor(
        fieldName,
        {
            dest,
            fileFilter(req, file, callback) {
                const fileExt = path.extname(file.originalname)?.substring(1) as string;

                callback(null,
                    allowedExs.includes(fileExt.toLowerCase())
                );
            },
        }
    )
    )
);