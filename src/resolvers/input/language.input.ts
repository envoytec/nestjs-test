import { InputType } from "@nestjs/graphql";
import { Field } from '@nestjs/graphql';

@InputType()
export default class LanguageInput{
  @Field()
  readonly name: string;
}