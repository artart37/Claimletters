import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { selectedItemAnime } from '../../animations/main-page';
import { AnimeStatus } from '../../interfaces/animation-state';

export type Styleinterface = AnimeStatus & {
  itemclass: string;
};

@Component({
  selector: 'app-magic-chips',
  templateUrl: './magic-chips.component.html',
  styleUrls: ['./magic-chips.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [selectedItemAnime],
})
export class MagicChipsComponent implements OnInit {
  @Input() chipArray$!: Observable<Array<any>>;
  @Input() item: any;
  //Short Tall White Blue. The checkmark image is static, within checkmark class
  @Input() chipstyle: string = '';
  dataArray!: Array<any>;
  selectAnimeState!: Array<any>;
  chipArraySubscription!: Subscription;
  styleArray: Array<any> = [];

  trackbyID(index: number) {
    return index ? index : Number;
  }

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.chipArraySubscription = this.chipArray$.subscribe((data) => {
      this.dataArray = data;
    });
    this.styleArray = this.dataArray.map(() => {
      return Object.create(
        {},
        {
          animestate: { writable: true, value: 'not-added' },
          itemclass: {
            writable: true,
            value: 'magic-cards-child magic-cards-child-start'.concat(
              ' ',
              this.chipstyle
            ),
          },
        }
      );
    });
  }

  selectedItem(index: number) {
    this.triggeranimation(index);
    this.changestyle(index);
  }

  ngOnDestroy(): void {
    this.chipArraySubscription.unsubscribe();
  }

  changestyle(index: number) {
    if (
      this.styleArray[index]?.itemclass.indexOf(
        'magic-cards-child-selected'
      ) !== -1
    ) {
      this.styleArray[index].itemclass = this.styleArray[
        index
      ]?.itemclass.replace(
        'magic-cards-child-selected',
        'magic-cards-child-start'
      );
    } else if (
      this.styleArray[index]?.itemclass.indexOf('magic-cards-child-start') !==
      -1
    ) {
      this.styleArray[index].itemclass = this.styleArray[
        index
      ]?.itemclass.replace(
        'magic-cards-child-start',
        'magic-cards-child-selected'
      );
    }
  }

  triggeranimation(index: number) {
    this.styleArray[index].animestate == 'added'
      ? (this.styleArray[index].animestate = 'not-added')
      : (this.styleArray[index].animestate = this.styleArray[index].animestate =
          'added');
  }
}
