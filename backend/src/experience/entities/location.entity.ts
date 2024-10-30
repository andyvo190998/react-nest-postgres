import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Experience } from './experience.entity';

@Entity({ name: 'locations' })
export class Locations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;

  // Foreign key to the Experience entity
  @ManyToOne(() => Experience, (experience) => experience.locations, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'experienceId' })
  experiences: Experience;

  @Column()
  experienceId: number; // This is the foreign key column
}
