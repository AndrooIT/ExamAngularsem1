import { Component } from '@angular/core';
import { SecondPageDashboardComponent } from '../second-page-dashboard/second-page-dashboard.component';
import { SecondPageControlPanelComponent } from '../second-page-control-panel/second-page-control-panel.component';
import { SecondPageGameFieldComponent } from '../second-page-game-field/second-page-game-field.component';
import { SecondPageHistoryComponent } from '../second-page-history/second-page-history.component';
import { HighScoresComponent } from '../high-scores/high-scores.component';

@Component({
  selector: 'app-second-page-game',
  standalone: true,
  imports: [SecondPageDashboardComponent, SecondPageControlPanelComponent,
    SecondPageGameFieldComponent,
     SecondPageHistoryComponent,
     HighScoresComponent
  ],

  templateUrl: './second-page-game.component.html',
  styleUrl: './second-page-game.component.css'
})
export class SecondPageGameComponent {

}
