import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PROFILE_TYPE } from '../constants/profile-type.enum';
import { Attribute } from './attribute.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phoneNumber: string;

  @Column()
  language: string;

  @Column()
  profileType: PROFILE_TYPE;

  @OneToMany(() => Attribute, (attribute) => attribute.profile)
  attributes: Attribute[];
}
