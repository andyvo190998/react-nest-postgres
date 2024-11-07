import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Experience } from "../../experience/entities/experience.entity";

@Entity({ name: "locations" })
export class Location {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "text", nullable: false })
	name: string;

	@Column()
	experienceId: number;

	@ManyToOne(() => Experience, (experience) => experience.locations, {
		onDelete: "CASCADE",
	})
	@JoinColumn({ name: "experienceId" })
	experiences: Experience;
}
