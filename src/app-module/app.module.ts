import { DatabaseModule } from 'src/_common/database-module/database.module';
import { ImageModule } from 'src/_common/Image-module/image.module';
import { PhotoModule } from 'src/photo-module/photo.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { config } from "src/_common/app-configs/config"
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { join } from 'path';


@Module({
  imports: [
    PhotoModule,
    ImageModule,
    DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', config.uploadsDir),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
