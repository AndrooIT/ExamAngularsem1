import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterEntrancesPipe } from '../filter-entrances.pipe';  
import { SortingMachinePipe } from '../sorting-machine.pipe';
import { GameControlService, ListItem } from '../game-controler.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-second-page-history',
  templateUrl: './second-page-history.component.html',
  styleUrls: ['./second-page-history.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, FilterEntrancesPipe, SortingMachinePipe]
})
export class SecondPageHistoryComponent implements OnInit, OnDestroy {
  list: ListItem[] = [{ date: new Date(), ev: 'Początek Gry', points: 0 }];
  idList: number = 1;
  events: string = '';
  sortDirection: string = 'asc';
  private subscription: Subscription = new Subscription();

  constructor(private gameControlService: GameControlService) {}

  ngOnInit() {
    this.subscription = this.gameControlService.events$.subscribe(event => {
      this.list.push(event);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
