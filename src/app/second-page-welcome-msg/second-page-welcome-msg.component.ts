import { Component } from '@angular/core';
import { PlayerDataService } from '../player-data.service';

@Component({
  selector: 'app-second-page-welcome-msg',
  standalone: true,
  imports: [],
  templateUrl: './second-page-welcome-msg.component.html',
  styleUrl: './second-page-welcome-msg.component.css'
})
export class SecondPageWelcomeMsgComponent {

name: string = '';

constructor(private playerDataService: PlayerDataService) { } 
  ngOnInit() {
    this.playerDataService.playerData$.subscribe(data => {
      if (data) {
      
        this.name=data.name;
      }
    });
}
}
