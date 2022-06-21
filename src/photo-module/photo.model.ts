import { Table, Column, Model, PrimaryKey, Default, DataType } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';

@Table
export class Photo extends Model {

  @IsNotEmpty({
    message: 'name is required'
  })
  @IsString()
  @Column
  name: string;
};