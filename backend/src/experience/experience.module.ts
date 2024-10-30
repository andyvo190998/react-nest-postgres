import { Module } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { ExperienceController } from './experience.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Experience } from './entities/experience.entity';
import { Locations } from './entities/location.entity';

@Module({
  controllers: [ExperienceController],
  providers: [ExperienceService],
  imports: [TypeOrmModule.forFeature([Experience, Locations])],
})
export class ExperienceModule {}
