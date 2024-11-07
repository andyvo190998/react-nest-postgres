import { Module } from "@nestjs/common";
import { LocationsService } from "./locations.service";
import { LocationsController } from "./locations.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Experience } from "../experience/entities/experience.entity";
import { Location } from "./entities/location.entity";
import { Locations } from "../experience/entities/location.entity";

@Module({
	controllers: [LocationsController],
	providers: [LocationsService],
	imports: [TypeOrmModule.forFeature([Experience, Locations])],
})
export class LocationsModule {}
