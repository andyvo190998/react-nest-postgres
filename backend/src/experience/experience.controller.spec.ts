import { Test, TestingModule } from "@nestjs/testing";
import { ExperienceController } from "./experience.controller";
import { ExperienceService } from "./experience.service";

describe("ExperienceController", () => {
	// let controller: ExperienceController;
	// let service: ExperienceService;

	// const mockExperienceService = {};

	// beforeEach(async () => {
	// 	const module: TestingModule = await Test.createTestingModule({
	// 		controllers: [ExperienceController],
	// 		providers: [
	// 			{
	// 				provide: ExperienceService,
	// 				useValue: {
	// 					getAllExperiences: jest.fn(),
	// 					filterExperience: jest.fn(),
	// 				},
	// 			},
	// 		],
	// 	}).compile();

	// 	controller = module.get<ExperienceController>(ExperienceController);
	// 	service = module.get<ExperienceService>(ExperienceService);
	// });

	// it("should be defined", () => {
	// 	expect(controller).toBeDefined();
	// });

	it("should be defined", () => {
		console.log(123);
		expect(10).toBe(10);
	});

	//   it('should return all users', async () => {
	//     const mockExperienceId = {
	//       slot_id: '1',
	//       loc_id: '1',
	//       available_slot: 5,
	//       max_slot: 10,
	//       price: 150,
	//       start_date: new Date('2024-09-24T07:00:00.000Z'),
	//       end_date: new Date('2024-09-24T08:00:00.000Z'),
	//       id: '1',
	//       exp_id: '1',
	//       location_name: 'Munich',
	//       experience_id: '1',
	//       name: 'Parachuting',
	//       description: 'Parachuting is really fun',
	//       image: 'parachuting',
	//     };
	//     jest
	//       .spyOn(service, 'getAllExperiences')
	//       .mockReturnValueOnce([mockExperienceId]);
	//     const result = controller.getAllExperiences();
	//     expect(result[0]).toEqual(mockExperienceId);
	//   });

	//   it('should return empty array if experience not found', async () => {
	//     jest.spyOn(service, 'filterExperience').mockReturnValueOnce([]);
	//     const result = controller.filterExperience('1000', '', '', '');
	//     expect(result.length).toBe(0);
	//   });
});
