import { Controller, Get, Param, Query } from '@nestjs/common';
import { ExperienceService } from './experience.service';

@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  getAllExperiences() {
    return this.experienceService.getAllExperiences();
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
