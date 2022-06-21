import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { config } from 'src/_common/app-configs/config';
import { Photo } from '../../photo-module/photo.model';

const models = [
    Photo,
];

export const databaseProvider = {
    provide: 'SEQUELIZE',
    useFactory: async () => {
        const sequelize = new Sequelize({
            ...config.database as SequelizeOptions,
            logging: false,
        });
        sequelize.addModels(models);
        await sequelize.sync();
        return sequelize;
    },
};