import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as ormOptions from './config/orm';
import { GraphQLModule } from '@nestjs/graphql';
import { LanguageModule } from './modules/language/language.module';
import { MovieModule } from './modules/movie/movie.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormOptions),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
    LanguageModule,
    MovieModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
