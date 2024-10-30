export class CreateExperienceDto {
  name: string;
  description: string;
  image: string;
}

export class CreateLocationDto {
  name: string;
  experienceId: number;
}
