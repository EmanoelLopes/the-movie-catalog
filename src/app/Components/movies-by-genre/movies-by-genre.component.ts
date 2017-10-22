import { Component, OnInit } from '@angular/core';
import { MoviesByGenreService } from './movies-by-genre.service';
import { MoviesByGenre } from './movies-by-genre';

@Component({
  selector: 'app-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.scss', '../movies/movies.component.scss']
})
export class MoviesByGenreComponent implements OnInit {
  loading = false;
  movies: MoviesByGenre[];
  constructor(private moviesByGenreService: MoviesByGenreService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    const genreId = window.location.pathname.split('/')[3];

    this.loading = true;
    this.moviesByGenreService.getMovie(genreId).subscribe((response) => {
      console.log(response);
      this.movies = response['results'];
      this.loading = false;
    });
  }
}
