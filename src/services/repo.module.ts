import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import RepoService from "./repo.service";

import Movie from "../db/models/movie.entity";
import Language from "../db/models/language.entity";

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Movie, Language])],
  providers: [RepoService],
  exports: [RepoService]
})
class RepoModule {}
export default RepoModule;