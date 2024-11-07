import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Locations } from "./location.entity";

@Entity({ name: "experiences" })
export class Experience {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "text", nullable: false })
	name: string;

	@Column({ type: "text", nullable: false })
	description: string;

	@Column({ type: "text", nullable: false })
	image: string;

	@OneToMany(() => Locations, (location) => location.experiences)
	locations: Locations[];
}
