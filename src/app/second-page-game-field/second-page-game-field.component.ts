import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgxSnakeComponent } from 'ngx-snake';
import { NgxSnakeModule } from 'ngx-snake';
import { GameControlService } from '../game-controler.service';
import { Subscription } from 'rxjs';
import { SendScoreService } from '../send-score.service';
import { PlayerDataService } from '../player-data.service';

@Component({
  selector: 'app-second-page-game-field',
  standalone: true,
  imports: [NgxSnakeModule],
  templateUrl: './second-page-game-field.component.html',
  styleUrls: ['./second-page-game-field.component.css']
})
export class SecondPageGameFieldComponent implements OnInit, OnDestroy {
  @ViewChild(NgxSnakeComponent)
  private _snake!: NgxSnakeComponent;

  private subscriptions: Subscription = new Subscription();
  private currentScore: number = 0;
  private playerData: { name: string, studentId: number, style: string } | null = null;

  constructor(
    private gameControlService: GameControlService,
    private sendScoreService: SendScoreService,
    private playerDataService: PlayerDataService
  ) {}

  ngOnInit() {
    this.subscriptions.add(this.gameControlService.start$.subscribe(() => this.onStartClick()));
    this.subscriptions.add(this.gameControlService.stop$.subscribe(() => this.onStopClick()));
    this.subscriptions.add(this.gameControlService.restart$.subscribe(() => this.onRestartClick()));
    this.subscriptions.add(this.gameControlService.up$.subscribe(() => this.onUpClick()));
    this.subscriptions.add(this.gameControlService.down$.subscribe(() => this.onDownClick()));
    this.subscriptions.add(this.gameControlService.left$.subscribe(() => this.onLeftClick()));
    this.subscriptions.add(this.gameControlService.right$.subscribe(() => this.onRightClick()));

    // Subscribe to points observable to get the current score
    this.subscriptions.add(this.gameControlService.points$.subscribe(points => {
      this.currentScore = points;
    }));

    // Get player data
    this.playerData = this.playerDataService.getPlayerData();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onStartClick() {
    this._snake.actionStart();
  }

  onStopClick() {
    this._snake.actionStop();
  }

  onRestartClick() {
    this._snake.actionReset();
  }

  onUpClick() {
    this._snake.actionUp();
  }

  onDownClick() {
    this._snake.actionDown();
  }

  onLeftClick() {
    this._snake.actionLeft();
  }

  onRightClick() {
    this._snake.actionRight();
  }

  onFoodEaten() {
    this.gameControlService.foodEaten();
  }

  onGameOver() {
    this.gameControlService.stopGame();
    this.subscriptions.unsubscribe();

    if (this.playerData) {
      const { name, studentId } = this.playerData;

      // Post the score when the game is over
      const scoreData = {
        name: name,
        game: 'snake',
        score: this.currentScore // Use the current score
      };

      this.sendScoreService.postScore(scoreData, studentId).subscribe(
        response => {
          // Handle successful score submission
          alert('Score submitted successfully!');
        },
        error => {
          // Handle error in score submission
          alert('Error submitting score: ' + error.message);
        }
      );

      alert('Whoa!!! What a disaster!!!! \n Game Over');
    } else {
      alert('Player data not available!');
    }
  }
}
