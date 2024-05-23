import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameControlService } from '../game-controler.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-second-page-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-page-dashboard.component.html',
  styleUrls: ['./second-page-dashboard.component.css']
})
export class SecondPageDashboardComponent implements OnInit, OnDestroy {
  status: string = 'Ready';
  points: number = 0;
  timeOfGame: number = 0;
  private statusSubscription: Subscription = new Subscription();
  private pointsSubscription: Subscription = new Subscription();
  private timeSubscription: Subscription = new Subscription();

  constructor(private gameControlService: GameControlService) {}

  ngOnInit() {
    this.statusSubscription = this.gameControlService.status$.subscribe(status => {
      this.status = status;
    });

    this.pointsSubscription = this.gameControlService.points$.subscribe(points => {
      this.points = points;
    });

    this.timeSubscription = this.gameControlService.time$.subscribe(time => {
      this.timeOfGame = time;
    });
  }

  ngOnDestroy() {
    this.statusSubscription.unsubscribe();
    this.pointsSubscription.unsubscribe();
    this.timeSubscription.unsubscribe();
  }
}
