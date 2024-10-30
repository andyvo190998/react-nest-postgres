import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ExperienceService } from './experience.service';
import {
  CreateExperienceDto,
  CreateLocationDto,
} from './dto/create-experience.dto';

@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  getAllExperiences() {
    return this.experienceService.findAll();
  }

  @Post()
  createNewExperience(@Body() experienceDto: CreateExperienceDto) {
    return this.experienceService.createOne(experienceDto);
  }

  @Post(':id')
  createNewLocation(@Body() locationDto: CreateLocationDto) {
    return this.experienceService.createNewLocation(locationDto);
  }

  @Delete(':id')
  deleteExperience(@Param('id') id: string) {
    console.log(typeof id);
    return this.experienceService.deleteExperience(id);
  }

  // filter experience by id, location, time frame. id is required and others are optional
  @Get(':id')
  filterExperience(
    @Param('id') experienceId: string,
    @Query('locationId') locationId?: string | null,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    const from_date = new Date(from);
    const to_date = new Date(to);

    return this.experienceService.filterExperience(
      experienceId,
      locationId,
      from_date,
      to_date,
    );
  }
}
