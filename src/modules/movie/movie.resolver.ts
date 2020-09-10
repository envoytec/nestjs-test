import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import MovieService from './movie.service';
import Movie from './movie.entity';
import MovieInput from './movie.input';

@Resolver()
export default class MovieResolver {
  constructor(private readonly movieService: MovieService){}

  @Query(() => [Movie])
  public async getMovies(): Promise<Movie[]> {
    return this.movieService.movieRepository.find();
  }

  @Query(() => Movie, { nullable: true})
  public async getMovie(@Args('id') id: number): Promise<Movie> {
    return this.movieService.movieRepository.findOne(id);
  }

  @Mutation(() => Movie)
  public async createMovie(@Args('data') input: MovieInput): Promise<Movie>{
    const movie = this.movieService.movieRepository.create({
      languageId: input.languageId,
      name: input.name,
      imdbLink: input.imdbLink,
      genre: input.genre,
      author: input.author,
      evaluation: input.evaluation,
      subtitles: input.subtitles,
      synopsis: input.synopsis,
      releaseDate: input.releaseDate
    })

    return this.movieService.movieRepository.save(movie);
  }
}