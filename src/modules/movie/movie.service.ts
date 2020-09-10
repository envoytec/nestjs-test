import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import Movie from "./movie.entity";


@Injectable()
class MovieService {
  constructor(
    @InjectRepository(Movie) public readonly movieRepository: Repository<Movie>
  ){
  }
}

export default MovieService;