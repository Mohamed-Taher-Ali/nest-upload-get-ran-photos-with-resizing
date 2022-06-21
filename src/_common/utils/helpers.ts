import { ErrorMessages } from "../app-configs/error-messages";
import { HttpException, HttpStatus } from "@nestjs/common";
import { Request } from "express"


export const getRandomInt = (min: number, max: number) => (
    Math.round(Math.random() * (max - min)) + min
);


export const addBaseURLToFile = (req: Request, fileName: string) => (
    `${req.headers.host}/${fileName}`
);


export const throwHttpException = (
    condition: boolean,
    errorMessage: ErrorMessages,
    httpStatus: HttpStatus,
    callback?: any
) => {
    if (condition) {
        callback && callback(null, true);
        
        throw new HttpException(
            errorMessage,
            httpStatus
        );
    }
}