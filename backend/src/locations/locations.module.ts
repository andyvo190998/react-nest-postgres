import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { Experience } from 'src/experience/entities/experience.entity';
import { Locations } from 'src/experience/entities/location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [LocationsController],
  providers: [LocationsService],
  imports: [TypeOrmModule.forFeature([Experience, Locations])],
})
export class LocationsModule {}
