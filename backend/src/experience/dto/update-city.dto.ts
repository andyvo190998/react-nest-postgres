import { PartialType } from '@nestjs/mapped-types';
import {
  CreateExperienceDto,
  CreateLocationDto,
} from './create-experience.dto';

export class UpdateExperienceDto extends PartialType(CreateExperienceDto) {}

export class UpdateLocationDto extends PartialType(CreateLocationDto) {}
