import { Injectable } from "@nestjs/common";
import { CreateSlotDto } from "./dto/create-slot.dto";
import { UpdateSlotDto } from "./dto/update-slot.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Slot } from "./entities/slot.entity";
import { Location } from "../locations/entities/location.entity";

@Injectable()
export class SlotService {
	constructor(
		@InjectRepository(Location)
		private readonly locationsRepository: Repository<Location>,

		@InjectRepository(Slot)
		private readonly slotRepository: Repository<Slot>
	) {}

	async create(createSlotDto: CreateSlotDto) {
		const newSlot = this.slotRepository.create(createSlotDto);
		return await this.slotRepository.save(newSlot);
	}

	async findAll() {
		return await this.slotRepository.find();
	}

	findOne(id: number) {
		return `This action returns a #${id} slot`;
	}

	update(id: number, updateSlotDto: UpdateSlotDto) {
		return `This action updates a #${id} slot`;
	}

	remove(id: number) {
		return `This action removes a #${id} slot`;
	}
}
