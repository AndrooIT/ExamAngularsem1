import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSnakeModule, NgxSnakeComponent } from 'ngx-snake';
import { FilterEntrancesPipe } from '../filter-entrances.pipe';
import { FormsModule } from '@angular/forms';
import { SortingMachinePipe } from '../sorting-machine.pipe';

export type ListItem = {
  date: Date;
  ev: string;
  points: number;
};

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [NgxSnakeModule, CommonModule, FilterEntrancesPipe, FormsModule, SortingMachinePipe],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css',
})
export class SecondPageComponent {
  @Input() name: string = '';
  @Input() style: string = '';
  @Input() loginPageVisible: boolean = false;
  @Output() messageToParent: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  CSSclass: string = '';
  status: string = 'Ready';
  points: number = 0;
  timeOfGame: number = 0;
  snack: boolean = false;
  sendLoginPageVisibleToParent() {
    this.loginPageVisible = true;
    this.messageToParent.emit(this.loginPageVisible);
  }
  list: ListItem[] = [{ date: new Date(), ev: 'Początek Gry', points: 0 }];
  idList: number = 1;
  events: string = '';
  sortDirection:string='asc';

  ngOnInit() {
    if (this.style == 'skala szarości') {
      this.CSSclass = 'frame';
    }
    if (this.style == 'surowy styl html') {
      this.CSSclass = '';
    }
    if (this.style == 'wiosenny zielony') {
      this.CSSclass = 'springGreen';
    }
  }
  @ViewChild(NgxSnakeComponent)
  private _snake!: NgxSnakeComponent;

  private intervalId!: number;

  runClock() {
    this.intervalId = setInterval(() => (this.timeOfGame += 1), 1000);
  }

  onStartClick() {
    this._snake.actionStart();
    this.status = 'Aktywny';
    this.runClock();
    this.addEventToList('Start');
  }

  onStopClick() {
    this._snake.actionStop();
    this.status = 'Zatrzymany';
    clearInterval(this.intervalId);
    this.addEventToList('Stop');
  }
  onRestartClick() {
    this._snake.actionReset();
    this.status = 'Gotowy';
    this.timeOfGame = 0;
    this.points = 0;
    clearInterval(this.intervalId);
    this.addEventToList('Restart');
  }

  onFoodEaten() {
    this.points += 20;
  }

  onGameOver() {
    this.status = 'Koniec Gry.\n Wciśnij Restart, aby zagrać jeszcze raz';
    alert(
      `Gratulacje!!!!\n Zdobyłeś ------------  ${this.points}  ------------ punktów.\n Wciśnij Restart, aby zagrać jeszcze raz`
    );
    clearInterval(this.intervalId);
  }
  addEventToList(evName: string) {
    this.list = [
      ...this.list,
      {
        date: new Date(),
        ev: evName,
        points: this.points,
      },
    ];
    this.idList += 1;
  }
}
