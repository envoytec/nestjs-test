import { InputType } from "@nestjs/graphql";

import { Field } from '@nestjs/graphql';

@InputType()
export default class MovieInput{
  @Field()
  readonly name: string;
  @Field()
  readonly synopsis: string;
  @Field()
  readonly genre: string;
  @Field()
  readonly releaseDate: Date;
  @Field()
  readonly subtitles: string;
  @Field()
  readonly author: string;
  @Field()
  readonly imdbLink: string;
  @Field()
  readonly evaluation: string;
  @Field()
  readonly languageId: number;
}