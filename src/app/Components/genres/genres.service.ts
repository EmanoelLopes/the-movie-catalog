import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Genres } from './genres';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GenresService {
  constructor(private http: Http) {}
  private BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';
  private API_KEY = 'ddbac9c7271014db02e4840fba2911e6';
  private PARAMS = 'language=pt-BR';
  private data: string[];

  getGenres(): Observable<Genres[]> {
    console.log();
    return this.http.get(`${this.BASE_URL}?api_key=${this.API_KEY}&${this.PARAMS}`)
      .map(this.extractGenres)
      .catch(this.handleError);
  }

  private extractGenres(res: Response) {
    return <Genres[]>res.json();
  }

  private handleError(res: Response) {
    return Observable.throw(res.json().error || 'Server error');
  }
}
