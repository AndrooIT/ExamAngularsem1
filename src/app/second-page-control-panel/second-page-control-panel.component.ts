import { Component } from '@angular/core';
import { GameControlService } from '../game-controler.service';


@Component({
  selector: 'app-second-page-control-panel',
  standalone: true,
  imports: [],
  templateUrl: './second-page-control-panel.component.html',
  styleUrls: ['./second-page-control-panel.component.css']
})
export class SecondPageControlPanelComponent {
  constructor(private gameControlService: GameControlService) {}

  onStartClick() {
    this.gameControlService.startGame();
  }

  onStopClick() {
    this.gameControlService.stopGame();
  }

  onRestartClick() {
    this.gameControlService.restartGame();
  }

  onUpClick() {
    this.gameControlService.actionUp();
  }

  onDownClick() {
    this.gameControlService.actionDown();
  }

  onLeftClick() {
    this.gameControlService.actionLeft();
  }

  onRightClick() {
    this.gameControlService.actionRight();
  }
}
