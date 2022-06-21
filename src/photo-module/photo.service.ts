import { repositories } from 'src/_common/database-module/database.repositories';
import { addBaseURLToFile, throwHttpException } from 'src/_common/utils/helpers';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { PhotoDTO } from './photo.types';
import { Photo } from './photo.model';
import { Request } from 'express';
import { config } from 'src/_common/app-configs/config';
import { allowedExs } from 'src/_common/interceptors/photo-interceptor';
import { ErrorMessages } from 'src/_common/app-configs/error-messages';
import { ImageService } from 'src/_common/Image-module/image.service';

const path = require('path');


@Injectable()
export class PhotoService {
  constructor(
    @Inject(repositories.PHOTOS_REPOSITORY)
    private readonly photoModel: typeof Photo,
    private readonly imageModel: ImageService,
  ) {}

  async getRandomPhoto(){
    const photo = await this.photoModel.findOne({
      order: [Sequelize.literal('RANDOM()')]
    });
    
    return photo;
  }

  async getRandomPhotoAbsPath(req: Request) {
    const photo = await this.getRandomPhoto();
    photo.name = addBaseURLToFile(req, `${config.uploadsDir}/${photo.name}`);
    
    return photo;
  }

  async uploadPhoto(file: Express.Multer.File){
    
    throwHttpException(
        !file,
        ErrorMessages.EXTENSION_NOT_ALLOWED,
        HttpStatus.FORBIDDEN,
    );
    
    this.imageModel.resizeTo({
      srcPath: `${config.uploadsDir}/${file.filename}`,
      dstPath: `${config.uploadsDir}/${file.filename}`,
      maxHeight: 5000,
      maxWidth: 5000,
    });

    await this.storePhoto({name: file.filename});
  }

  async storePhoto(input: PhotoDTO): Promise<Photo> {
    let newPhoto = new Photo(input);
    newPhoto = await newPhoto.save();

    return newPhoto.get({ plain: true });
  }
}
