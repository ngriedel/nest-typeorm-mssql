import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PROFILE_ATTR } from '../constants/profile-attr.constant';
import { Profile } from './profile.entity';

@Entity()
export class Attribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  attributeCode: PROFILE_ATTR;

  @Column()
  attributeValue: string;

  @ManyToOne(() => Profile, (profile) => profile.attributes)
  profile: Profile;

  // TODO expiration times etc
}
