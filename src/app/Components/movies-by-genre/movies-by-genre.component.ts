import { Component, OnInit } from '@angular/core';
import { MoviesByGenreService } from './movies-by-genre.service';
import { MoviesByGenre } from './movies-by-genre';
import { GenresService } from '../genres/genres.service';
import { Genres } from '../genres/genres';

@Component({
  selector: 'app-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.scss', '../movies/movies.component.scss']
})
export class MoviesByGenreComponent implements OnInit {
  loading = false;
  genreTitle = [];
  movies: MoviesByGenre[];
  genres: Genres[];
  constructor(
    private moviesByGenreService: MoviesByGenreService,
    private genresService: GenresService
  ) { }

  ngOnInit() {
    this.getMovies();
    this.getGenres();
  }

  getMovies() {
    // Ok, this is ugly and need to be fixed
    const genreId = window.location.pathname.split('/')[3];

    this.loading = true;
    this.moviesByGenreService.getMovie(genreId).subscribe((response) => {
      this.movies = response['results'];
      this.loading = false;
    });
  }

  getGenres() {
    // Ok, this is ugly and need to be fixed
    const genreId = window.location.pathname.split('/')[3];

    this.loading = true;
    this.genresService.getGenres().subscribe((response) => {
      this.genres = response['genres'];
      this.genres.filter((genre) => {
        if (genre.id.toString() === genreId) {
          this.genreTitle = genre.name;
        }
      });
      this.loading = false;
    });
  }
}
