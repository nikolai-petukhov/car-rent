import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { CarsService } from 'src/cars/services/cars/cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getCars() {
    return this.carsService.findAll();
  }
}
