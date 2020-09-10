import Movie from '../modules/movie/movie.entity';
import Language from '../modules/language/language.entity'

export default function getEntities() : Array<any> {
  return [ Movie, Language ];
}