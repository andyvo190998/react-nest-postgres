import { Injectable, NotFoundException } from "@nestjs/common";
import { experiences, locations, slots } from "../database/experience-list";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateExperienceDto, CreateLocationDto } from "./dto/create-experience.dto";
import { Experience } from "./entities/experience.entity";
import { Locations } from "./entities/location.entity";
@Injectable()
export class ExperienceService {
	constructor(
		@InjectRepository(Experience)
		private readonly experiencesRepository: Repository<Experience>,

		@InjectRepository(Locations)
		private readonly locationsRepository: Repository<Locations>
	) {}

	async findAll() {
		return await this.experiencesRepository.find();
	}

	async createNewLocation(locationDto: CreateLocationDto) {
		const experience = await this.experiencesRepository.findOne({
			where: { id: locationDto.experienceId },
		});

		if (!experience) {
			throw new NotFoundException("Experience not found");
		}

		const newLocation = this.locationsRepository.create({
			name: locationDto.name,
			experienceId: locationDto.experienceId,
		});

		return this.locationsRepository.save(newLocation);
	}

	async deleteExperience(id: string) {
		const experience = await this.experiencesRepository.findOne({
			where: { id: parseInt(id) },
		});

		if (!experience) {
			throw new NotFoundException("Experience not found");
		}

		return await this.experiencesRepository.remove(experience);
	}

	async createOne(experienceDto: CreateExperienceDto) {
		const newExperience = this.experiencesRepository.create(experienceDto);
		return await this.experiencesRepository.save(newExperience);
	}

	getAllExperiences() {
		// join all three tables
		const returnData = slots.map((s) => {
			const loc = locations.find((l) => l.id === s.loc_id);
			const exp = experiences.find((e) => e.experience_id === loc.exp_id);
			return {
				...s,
				...loc,
				...exp,
			};
		});
		return returnData;
	}

	filterExperience(
		experienceId: string,
		locationId?: string | null,
		from?: Date | null,
		to?: Date | null
	) {
		const validStartDate = this.validateDate(from);
		const validEndDate = this.validateDate(to);

		const filterFrom = validStartDate ? from : new Date();
		const filterTo = validEndDate ? to : new Date("9999-12-31T23:59:59Z");

		// select experiences
		const exps = experiences.filter((e) => e.experience_id === experienceId);
		if (exps.length === 0) {
			return [];
		}

		// join with locations
		const locs = locations.filter((l) => {
			const matchedLocation = exps.map((val) => val.experience_id).includes(l.exp_id);

			// check if user wants to query by location
			if (locationId) {
				return matchedLocation && locationId === l.id;
			} else {
				return matchedLocation;
			}
		});
		if (locs.length === 0) {
			return [];
		}

		// join with table slot. find lot with id and time frame
		const sls = slots.filter(
			(s) =>
				locs.map((loc) => loc.id).includes(s.loc_id) &&
				this.dateComparison(s.start_date, filterFrom) &&
				this.dateComparison(filterTo, s.end_date)
		);
		return sls.map((s) => {
			// get info of location
			const loc = locations.find((l) => l.id === s.loc_id);
			const exp = experiences.find((l) => l.experience_id === loc.exp_id);
			return {
				...s,
				...loc,
				...exp,
			};
		});
	}

	private dateComparison(date1: Date, date2: Date): boolean {
		// set time to midnight to make sure the slot will be selected it if has the same date with filter date
		// date1.setUTCHours(0, 0, 0, 0);
		// date2.setUTCHours(0, 0, 0, 0);
		const newDate1 = new Date(date1).setUTCHours(0, 0, 0, 0);
		const newDate2 = new Date(date2).setUTCHours(0, 0, 0, 0);
		return newDate1 >= newDate2;
	}

	private validateDate(date: any): boolean {
		return !isNaN(date.getTime());
	}
}
