import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn
} from 'typeorm';

import { Field, ObjectType } from '@nestjs/graphql';
import Language from '../language/language.entity';

@ObjectType()
@Entity({ name: 'movie' })
export default class Movie {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ name: 'language_id' })
  languageId: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  synopsis: string;

  @Field()
  @Column()
  genre: string;

  @Field()
  @Column({ name: 'release_date' })
  releaseDate: Date;

  @Field()
  @Column()
  subtitles: string;

  @Field()
  @Column()
  author: string;

  @Field()
  @Column({ name: 'imdb_link' })
  imdbLink: string;

  @Field()
  @Column()
  evaluation: string;

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

  @ManyToOne(
    () => Language,
    language => language.movieConnection,
    { primary: true },
  )
  @JoinColumn({ name: 'language_id' })
  languageConnection: Promise<Language>

}