import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm';

import { Field, ObjectType } from '@nestjs/graphql';
import Movie from '../movie/movie.entity';

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

  @Field({
    defaultValue: true
  })
  active: boolean;

  @OneToMany(
    () => Movie,
    movie => movie.languageConnection,
  )
  movieConnection: Promise<Movie[]>

}