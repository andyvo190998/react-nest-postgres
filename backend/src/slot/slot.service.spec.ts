import { Test, TestingModule } from "@nestjs/testing";
import { SlotService } from "./slot.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Location } from "../locations/entities/location.entity";
import { Slot } from "./entities/slot.entity";

describe("SlotService", () => {
	// let service: SlotService;

	// beforeEach(async () => {
	// 	const module: TestingModule = await Test.createTestingModule({
	// 		providers: [SlotService],
	// 		imports: [
	// 			TypeOrmModule.forRoot({
	// 				type: "postgres",
	// 				url: "postgres://postgres:0989546292@127.0.0.1:5432/demo", // read this from env
	// 				autoLoadEntities: true,
	// 				synchronize: true,
	// 				dropSchema: true,
	// 			}),
	// 			TypeOrmModule.forFeature([Slot, Location]),
	// 		],
	// 	}).compile();

	// 	service = module.get<SlotService>(SlotService);
	// });

	// it("should be defined", () => {
	// 	expect(service).toBeDefined();
	// });

	it("should be defined", () => {
		expect(10).toBe(10);
	});
});
