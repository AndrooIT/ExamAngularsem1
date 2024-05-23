import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface PlayerData {
  name: string;
  studentId: number;
  style: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  private playerDataSubject = new BehaviorSubject<PlayerData | null>(null);
  playerData$ = this.playerDataSubject.asObservable();

  setPlayerData(data: PlayerData) {
    this.playerDataSubject.next(data);
  }

  getPlayerData(): PlayerData | null {
    return this.playerDataSubject.getValue();
  }
}

