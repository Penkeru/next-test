import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly currentServerUrl = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  getMoviesList(): Observable<any> {
    return this.http.get(this.currentServerUrl + 'movies');
  }

  getMovieById(movieId: number): Observable<any> {
    return this.http.get(this.currentServerUrl + `movies/${movieId}`);
  }
}
