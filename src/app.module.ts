import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as ormOptions from './config/orm';
import RepoModule from './services/repo.module';
import MovieResolver from './resolvers/movie.resolver';
import LanguageResolver from './resolvers/language.resolver';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormOptions), 
    RepoModule,
    LanguageResolver,
    MovieResolver,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
