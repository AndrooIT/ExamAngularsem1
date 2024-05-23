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
import { SecondPageNavbarComponent } from '../second-page-navbar/second-page-navbar.component';
import { SecondPageWelcomeMsgComponent } from '../second-page-welcome-msg/second-page-welcome-msg.component';
import { SecondPageGameComponent } from '../second-page-game/second-page-game.component';
import { PlayerDataService } from '../player-data.service';



@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [
     NgxSnakeModule, CommonModule, FilterEntrancesPipe, FormsModule, SortingMachinePipe, SecondPageNavbarComponent, SecondPageWelcomeMsgComponent, SecondPageGameComponent],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css',
})
export class SecondPageComponent {

  style: string = '';
  CSSclass: string = '';

  snack: boolean = false;
 
  constructor( private playerDataService: PlayerDataService) { } 

  ngOnInit() {
    this.playerDataService.playerData$.subscribe(data => {
      if (data) {
      
        this.style=data.style;
      }
    });

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
  // @ViewChild(NgxSnakeComponent)
  // private _snake!: NgxSnakeComponent;

  // private intervalId!: number;

   //addEventToList(evName: string) {
    // this.list = [
    //   ...this.list,
    //   {
    //     date: new Date(),
    //     ev: evName,
    //     points: this.points,
    //   },
    // ];
    // this.idList += 1;
  // }
}
