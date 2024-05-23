import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


interface ScoreData {
  name: string;
  game: string;
  score: number;
}

@Injectable({
  providedIn: 'root'
})
export class SendScoreService {

  private apiUrl = 'https://scores.chrum.it/scores';

  constructor(private _http: HttpClient) {}

  postScore(scoreData: ScoreData, token: number): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Auth-token': token.toString()
    });
    return this._http.post<any>(this.apiUrl, scoreData, { headers });
  }
}
