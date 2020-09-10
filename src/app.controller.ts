import { Controller, Get } from '@nestjs/common';
import MovieService from './modules/movie/movie.service';

@Controller()
export class AppController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async getHello(): Promise<number> {
    return await this.movieService.movieRepository.count();
  }
}
