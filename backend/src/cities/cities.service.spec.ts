import { Test, TestingModule } from "@nestjs/testing";
import { CitiesService } from "./cities.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { City } from "./entities/city.entity";

describe("CitiesService", () => {
	let service: CitiesService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				TypeOrmModule.forRoot({
					type: "postgres",
					url: "postgres://postgres:0989546292@127.0.0.1:5432/demo", // read this from env
					autoLoadEntities: true,
					synchronize: true,
					dropSchema: true,
				}),
				TypeOrmModule.forFeature([City]),
			],
			providers: [CitiesService],
		}).compile();

		service = module.get<CitiesService>(CitiesService);
	});

	it("should be defined", () => {
		expect(service).toBeDefined();
	});

	it("should be defined", () => {
		expect(10).toBe(10);
	});

	it("should return all experiences", async () => {
		const cities = await service.findAll();
		console.log(cities);
		expect(cities.length).toBe(0);
	});
});
