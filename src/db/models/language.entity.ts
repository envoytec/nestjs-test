import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { closeSync } from 'fs';

import { Field, ObjectType } from '@nestjs/graphql';
import Movie from './movie.entity';

@ObjectType()
@Entity({ name: 'language' })
export default class Language {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Field()
  @CreateDateColumn()
  active: boolean;

  @OneToMany(
    () => Movie,
    movie => movie.languageConnection,
  )
  movieConnection: Promise<Movie[]>

}