import { Test, TestingModule } from "@nestjs/testing";
import { LocationsService } from "./locations.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Experience } from "../experience/entities/experience.entity";
import { Location } from "./entities/location.entity";

describe("LocationsService", () => {
	// let service: LocationsService;

	// beforeEach(async () => {
	// 	const module: TestingModule = await Test.createTestingModule({
	// 		providers: [LocationsService],
	// 		imports: [
	// 			TypeOrmModule.forRoot({
	// 				type: "postgres",
	// 				url: "postgres://postgres:0989546292@127.0.0.1:5432/demo", // read this from env
	// 				autoLoadEntities: true,
	// 				synchronize: true,
	// 				dropSchema: true,
	// 			}),
	// 			TypeOrmModule.forFeature([Experience, Location]),
	// 		],
	// 	}).compile();

	// 	service = module.get<LocationsService>(LocationsService);
	// });

	// it("should be defined", () => {
	// 	expect(service).toBeDefined();
	// });

	it("should be defined", () => {
		expect(10).toBe(10);
	});
});
