import { Experience } from 'src/experience/entities/experience.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'locations' })
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column()
  experienceId: number;

  @ManyToOne(() => Experience, (experience) => experience.locations, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'experienceId' })
  experiences: Experience;
}
