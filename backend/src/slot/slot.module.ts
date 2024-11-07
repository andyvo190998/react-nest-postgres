import { Module } from "@nestjs/common";
import { SlotController } from "./slot.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SlotService } from "./slot.service";
import { Slot } from "./entities/slot.entity";
import { Location } from "../locations/entities/location.entity";

@Module({
	controllers: [SlotController],
	providers: [SlotService],
	imports: [TypeOrmModule.forFeature([Slot, Location])],
})
export class SlotModule {
	test() {
		console.log("test");
	}
}
