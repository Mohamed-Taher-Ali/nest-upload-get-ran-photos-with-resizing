export interface IImage {
    resizeTo(input: IResizeParams): void;
}

export interface IResizeParams {
    srcPath: string;
    dstPath: string;
    maxHeight: number;
    maxWidth: number;
}