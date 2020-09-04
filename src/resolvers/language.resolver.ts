import { Resolver, Mutation, Args, Query } from "@nestjs/graphql";
import RepoService from "../services/repo.service";
import Language from "../db/models/language.entity";
import LanguageInput from "./input/language.input";

@Resolver()
export default class LanguageResolver{
  constructor(private readonly repoService: RepoService){}

  @Query(() => [Language])
  public async getLanguages() : Promise<Language[]>{
    return this.repoService.languageRepo.find();
  }

  @Mutation(() => Language)
  public async createLanguage(@Args('data') input: LanguageInput) : Promise<Language> {
    const language = this.repoService.languageRepo.create({
      name: input.name
    });
    return this.repoService.languageRepo.save(language);
    
  }
}
