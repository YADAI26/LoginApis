import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private escuelajsUrl = 'https://api.escuelajs.co/api/v1/users';
  private rickUrl = 'https://rickandmortyapi.com/api/character';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.escuelajsUrl, this.httpOptions);
  }

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.rickUrl, this.httpOptions).pipe(
      map(response => {
        if (!response) {
          throw new Error('No data received');
        }
        return response;
      })
    );
  }
}