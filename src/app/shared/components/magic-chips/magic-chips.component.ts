import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { selectedItemAnime } from '../../animations/main-page';
import { TGenericObjectKeyType } from '../../types/generics.type';
import { TChipStyle } from './data-structure/chips.type';
import { IChipTitles } from './data-structure/magic-chips.interface';
@Component({
  selector: 'app-magic-chips',
  templateUrl: './magic-chips.component.html',
  styleUrls: ['./magic-chips.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [selectedItemAnime],
})
export class MagicChipsComponent implements OnInit {
  @Input() chips!: IChipTitles[];
  @Input() chipsPrpertyToDisplay!: TGenericObjectKeyType;
  @Input() chipStyle!: TChipStyle[];

  trackbyID(index: number) {
    return index ? index : Number;
  }

  ngOnInit(): void {
    this.chips = this.initChipsAndStyling();
  }

  private initChipsAndStyling(): IChipTitles[] {
    return this.chips?.map((v) => {
      return {
        ...v,
        itemClass: 'magic-cards-child magic-cards-child-start ',
        animeState: 'not-added',
      };
    });
  }

  selectedItem(index: number) {
    this.triggerAnimation(index);
    this.changeStyle(index);
  }

  changeStyle(index: number) {
    const CHIP_ITEM_CLASS = this.chips[index]?.itemClass;
    if (
      CHIP_ITEM_CLASS &&
      CHIP_ITEM_CLASS.indexOf('magic-cards-child-selected') !== -1
    ) {
      this.chips[index].itemClass = CHIP_ITEM_CLASS.replace(
        /magic-cards-child-selected/g,
        'magic-cards-child-start'
      );
    } else if (
      CHIP_ITEM_CLASS &&
      CHIP_ITEM_CLASS.indexOf('magic-cards-child-start') !== -1
    ) {
      this.chips[index].itemClass = CHIP_ITEM_CLASS.replace(
        /magic-cards-child-start/g,
        'magic-cards-child-selected'
      );
    }
  }

  triggerAnimation(index: number) {
    this.chips[index].animeState == 'added'
      ? (this.chips[index].animeState = 'not-added')
      : (this.chips[index].animeState = this.chips[index].animeState = 'added');
  }
}
