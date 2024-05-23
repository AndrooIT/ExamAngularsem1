import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HighScoresService {
  
 

  private apiUrl = 'https://scores.chrum.it/scores/snake';

  constructor(private _http: HttpClient) {}

  getHighScores() {

    return this._http.get<any[]>(this.apiUrl, { headers: {
      'Accept': 'application/json'
    }});
  }
}
