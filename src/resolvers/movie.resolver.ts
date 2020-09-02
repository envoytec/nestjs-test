import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import RepoService from 'src/services/repo.service';
import Movie from 'src/db/models/movie.entity';
import MovieInput from './input/movie.input';

@Resolver()
export default class MovieResolver {
  constructor(private readonly repoService: RepoService){}

  @Query(() => [Movie])
  public async getMovies(): Promise<Movie[]> {
    return this.repoService.movieRepo.find();
  }

  @Query(() => Movie, { nullable: true})
  public async getMovie(@Args('id') id: number): Promise<Movie> {
    return this.repoService.movieRepo.findOne(id);
  }

  @Mutation(() => Movie)
  public async createMovie(@Args('data') input: MovieInput): Promise<Movie>{
    const movie = this.repoService.movieRepo.create({  

    })
  }
}