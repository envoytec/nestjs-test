import { Controller, Get } from '@nestjs/common';
import RepoService from './services/repo.service';

@Controller()
export class AppController {
  constructor(private readonly repoService: RepoService) {}

  @Get()
  async getHello(): Promise<number> {
    return await this.repoService.movieRepo.count();
  }
}
