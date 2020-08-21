import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import Movie from "../db/models/movie.entity";
import Language from "../db/models/language.entity";


@Injectable()
class RepoService {
  public constructor(
    @InjectRepository(Movie) public readonly movieRepo: Repository<Movie>,
    @InjectRepository(Language) public readonly languageRepo: Repository<Language>,
  ){

  }
}

export default RepoService;