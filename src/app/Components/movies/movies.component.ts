import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { Movies } from './movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  loading = false;
  movies: Movies[];
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.loading = true;
    this.movieService.getMovie().subscribe((response) => {
      this.movies = response['results'];
      this.loading = false;
    });
  }
}
