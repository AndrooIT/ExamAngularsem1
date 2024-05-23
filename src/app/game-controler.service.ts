import { Injectable } from '@angular/core';
import { Subject, interval, Subscription } from 'rxjs';

export type ListItem = {
  date: Date;
  ev: string;
  points: number;
};

@Injectable({
  providedIn: 'root'
})
export class GameControlService {

  private eventsSubject = new Subject<ListItem>();
  events$ = this.eventsSubject.asObservable();

  private statusSubject = new Subject<string>();
  status$ = this.statusSubject.asObservable();

  private pointsSubject = new Subject<number>();
  points$ = this.pointsSubject.asObservable();

  private timeSubject = new Subject<number>();
  time$ = this.timeSubject.asObservable();
  private timerSubscription: Subscription | null = null;

  private points: number = 0;
  private timeOfGame: number = 0;

  private startSubject = new Subject<void>();
  private stopSubject = new Subject<void>();
  private restartSubject = new Subject<void>();
  private upSubject = new Subject<void>();
  private downSubject = new Subject<void>();
  private leftSubject = new Subject<void>();
  private rightSubject = new Subject<void>();

  start$ = this.startSubject.asObservable();
  stop$ = this.stopSubject.asObservable();
  restart$ = this.restartSubject.asObservable();
  up$ = this.upSubject.asObservable();
  down$ = this.downSubject.asObservable();
  left$ = this.leftSubject.asObservable();
  right$ = this.rightSubject.asObservable();

  addEvent(event: ListItem) {
    this.eventsSubject.next(event);
  }

  updateStatus(status: string) {
    this.statusSubject.next(status);
  }

  updatePoints(points: number) {
    this.points += points;
    this.pointsSubject.next(this.points);
  }

  startGame() {
    this.addEvent({ date: new Date(), ev: 'Start', points: 0 });
    this.updateStatus('Running');
    this.startSubject.next();

    if (!this.timerSubscription) {
      this.timerSubscription = interval(1000).subscribe(() => {
        this.timeOfGame++;
        this.timeSubject.next(this.timeOfGame);
      });
    }
  }

  stopGame() {
    this.addEvent({ date: new Date(), ev: 'Stop', points: this.points});
    this.updateStatus('Stopped');
    this.stopSubject.next();

    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
  }

  restartGame() {
    this.addEvent({ date: new Date(), ev: 'Restart', points: this.points});
    this.updateStatus('Ready');
    this.points = 0;
    this.timeOfGame = 0;
    this.pointsSubject.next(this.points);
    this.timeSubject.next(this.timeOfGame);
    this.restartSubject.next();

    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
  }

  actionUp() {
    this.addEvent({ date: new Date(), ev: 'Up', points: this.points});
    this.upSubject.next();
  }

  actionDown() {
    this.addEvent({ date: new Date(), ev: 'Down', points: this.points});
    this.downSubject.next();
  }

  actionLeft() {
    this.addEvent({ date: new Date(), ev: 'Left', points: this.points});
    this.leftSubject.next();
  }

  actionRight() {
    this.addEvent({ date: new Date(), ev: 'Right', points: this.points});
    this.rightSubject.next();
  }

  foodEaten() {
    this.addEvent({ date: new Date(), ev: 'FoodEaten', points: this.points });
    this.updatePoints(20);
  }
}
