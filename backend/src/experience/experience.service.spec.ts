import { Test, TestingModule } from '@nestjs/testing';
import { ExperienceService } from './experience.service';

describe('ExperienceService', () => {
  let service: ExperienceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExperienceService],
    }).compile();

    service = module.get<ExperienceService>(ExperienceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all experiences', () => {
    const experiences = service.getAllExperiences();
    expect(experiences.length).toBe(8);
  });

  it('should return experiences by experience id filter', () => {
    const from = new Date('');
    const to = new Date('');
    const experiences = service.filterExperience('1', '', from, to);
    expect(experiences[0].name).toBe('Parachuting');
  });

  it('should return experiences by experience id and location id filters', () => {
    const from = new Date('');
    const to = new Date('');
    const experiences = service.filterExperience('1', '1', from, to);
    expect(experiences[0].location_name).toBe('Munich');
  });

  it('should return experiences by experience id and time frame filters', () => {
    const from = new Date('2024-09-23');
    const to = new Date('2024-09-25');
    const experiences = service.filterExperience('1', '', from, to);
    expect(experiences.length).toBe(3);
  });

  it('should return experiences by experience id and start date filters', () => {
    const from = new Date('2024-09-25');
    const to = new Date('');
    const experiences = service.filterExperience('1', '', from, to);
    expect(experiences.length).toBe(1);
  });

  it('should return experiences by experience id and end date filters', () => {
    const from = new Date('');
    const to = new Date('2024-09-24');
    const experiences = service.filterExperience('1', '', from, to);
    expect(experiences.length).toBe(2);
  });
});
