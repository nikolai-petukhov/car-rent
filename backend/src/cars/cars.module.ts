/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { Car } from 'src/typeorm';
import { CarsController } from './controllers/cars/cars.controller';
import { CarsService } from './services/cars/cars.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  controllers: [CarsController],
  providers: [CarsService]
})
export class CarsModule {}
