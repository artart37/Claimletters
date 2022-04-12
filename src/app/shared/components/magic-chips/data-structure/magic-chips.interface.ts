import { AnimeAndStyling } from '../../../interfaces/animation-state.interface';
import { TGenericObjectKeyType } from '../../../types/generics.type';

export interface IChipTitles extends AnimeAndStyling {
  [key: TGenericObjectKeyType]: any;
  itemClass: AnimeAndStyling['itemClass'];
  animeState: AnimeAndStyling['animeState'];
}
