import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  fakePasswordHash: string;

  @Column({ default: false })
  isActive: boolean;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;
}
