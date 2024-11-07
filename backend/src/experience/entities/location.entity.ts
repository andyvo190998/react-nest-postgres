import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Experience } from "./experience.entity";
import { Slot } from "../../slot/entities/slot.entity";

@Entity({ name: "locations" })
export class Locations {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "text", nullable: false })
	name: string;

	@Column()
	experienceId: number; // This is the foreign key column

	// Foreign key to the Experience entity
	@ManyToOne(() => Experience, (experience) => experience.locations, {
		onDelete: "CASCADE",
	})
	@JoinColumn({ name: "experienceId" })
	experiences: Experience;

	@OneToMany(() => Slot, (slot) => slot.locations)
	slots: Slot[];
}
