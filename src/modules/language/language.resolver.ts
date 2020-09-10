import { Resolver, Mutation, Args, Query } from "@nestjs/graphql";
import Language from "./language.entity";
import LanguageInput from "./language.input";
import LanguageService from "./language.service";

@Resolver()
export default class LanguageResolver{
  constructor(private readonly languageService: LanguageService){}

  @Query(() => [Language])
  public async getLanguages() : Promise<Language[]>{
    return this.languageService.languageRepository.find();
  }

  @Mutation(() => Language)
  public async createLanguage(@Args('data') input: LanguageInput) : Promise<Language> {
    const language = this.languageService.languageRepository.create({
      name: input.name
    });
    return this.languageService.languageRepository.save(language);
    
  }
}
