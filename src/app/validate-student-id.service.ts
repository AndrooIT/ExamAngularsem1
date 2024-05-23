import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidateStudentIdService {
  private apiUrl = 'https://scores.chrum.it/check-token';

  constructor(private _http: HttpClient) {}

  getAccess(token: number): Observable<boolean> {
    return this._http.post<{ success: boolean }>(this.apiUrl, {}, {
      headers: {
        'Accept': 'application/json',
        'Auth-token': token.toString() // Ensure the token is sent as a string
      }
    }).pipe(
      map(response => response.success) // Extract the 'success' property
    );
  }
}
