import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Locations } from "../../experience/entities/location.entity";

@Entity()
export class Slot {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "int", nullable: false })
	availableSlot: number;

	@Column({ type: "int", nullable: false })
	maxSlot: number;

	@Column({ type: "float", nullable: false })
	price: number;

	@Column({ type: "date", nullable: false })
	startDate: Date;

	@Column({ type: "date", nullable: false })
	endDate: Date;

	@Column({ type: "number", nullable: false })
	locationId: number;

	@ManyToOne(() => Locations, (location) => location.slots, {
		onDelete: "CASCADE",
	})
	@JoinColumn({ name: "locationId" })
	locations: Locations;
}
