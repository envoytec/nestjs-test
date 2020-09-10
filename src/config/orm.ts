import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import getEntities from './entities';

const entities = getEntities();

const options: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'data/movies.db',
  logging: true,
  entities,
  migrations: [path.resolve(__dirname, '..', 'database', 'migrations', '*')] ,
  cli: { migrationsDir: path.join(__dirname, '..', 'database', 'migrations')}
}

module.exports = options;