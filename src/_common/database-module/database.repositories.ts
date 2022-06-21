import { Photo } from "src/photo-module/photo.model";

export enum repositories {
    PHOTOS_REPOSITORY = 'PHOTOS_REPOSITORY',
};

export const repositoriesModel = [
    {
        provide: repositories.PHOTOS_REPOSITORY,
        useValue: Photo
    },
];