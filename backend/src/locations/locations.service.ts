import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateLocationDto } from "./dto/create-location.dto";
import { UpdateLocationDto } from "./dto/update-location.dto";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Locations } from "../experience/entities/location.entity";
import { Experience } from "../experience/entities/experience.entity";

@Injectable()
export class LocationsService {
	constructor(
		@InjectRepository(Experience)
		private readonly experienceRepository: Repository<Experience>,

		@InjectRepository(Locations)
		private readonly locationRepository: Repository<Locations>
	) {}

	async create(createLocationDto: CreateLocationDto) {
		const experience = await this.experienceRepository.findOne({
			where: { id: createLocationDto.experienceId },
		});

		if (!experience) {
			throw new NotFoundException("Experience not found!");
		}

		const newLocation = await this.locationRepository.create(createLocationDto);
		return await this.locationRepository.save(newLocation);
	}

	async findAll() {
		return await this.locationRepository.find();
	}

	async findOne(id: number) {
		const location = await this.locationRepository.findOne({ where: { id } });
		if (!location) {
			throw new NotFoundException("Location not found!");
		}
		return location;
	}

	async update(id: number, updateLocationDto: UpdateLocationDto) {
		const location = await this.findOne(id);
		if (!location) {
			throw new NotFoundException("Location not found!");
		}
		const experience = await this.experienceRepository.findOne({
			where: { id: updateLocationDto.experienceId },
		});
		console.log(updateLocationDto.experienceId);
		if (!experience) {
			throw new NotFoundException("Experience not found!");
		}

		Object.assign(location, updateLocationDto);
		return await this.locationRepository.save(location);
	}

	async remove(id: number) {
		const location = await this.findOne(id);
		if (!location) {
			throw new NotFoundException("Location not found!");
		}

		return await this.locationRepository.remove(location);
	}
}
