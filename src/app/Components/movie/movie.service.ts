import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Movie } from './movie';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieService {
  constructor(private http: Http) {}
  private BASE_URL = 'https://api.themoviedb.org/3/movie/';
  private API_KEY = 'ddbac9c7271014db02e4840fba2911e6';
  private PARAMS = 'language=pt-BR';
  private data: string[];

  getMovie(movieId): Observable<Movie[]> {
    console.log(movieId);
    return this.http.get(`${this.BASE_URL}${movieId}?api_key=${this.API_KEY}&${this.PARAMS}`)
      .map(this.extractMovie)
      .catch(this.handleError);
  }

  private extractMovie(res: Response) {
    return <Movie[]>res.json();
  }

  private handleError(res: Response) {
    return Observable.throw(res.json().error || 'Server error');
  }
}
