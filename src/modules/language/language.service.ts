import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import Language from "./language.entity";


@Injectable()
class LanguageService {
  constructor(
    @InjectRepository(Language) public readonly languageRepository: Repository<Language>
  ){
  }
}

export default LanguageService;