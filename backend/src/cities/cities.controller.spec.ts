import { Test, TestingModule } from "@nestjs/testing";
import { CitiesController } from "./cities.controller";
import { CitiesService } from "./cities.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { City } from "./entities/city.entity";

describe("CitiesController", () => {
	let controller: CitiesController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [CitiesController],
			providers: [CitiesService],
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
		}).compile();

		controller = module.get<CitiesController>(CitiesController);
	});

	it("should be defined", () => {
		expect(controller).toBeDefined();
	});
});
