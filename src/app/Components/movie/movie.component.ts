import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  loading = false;
  movie: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    const movieId = window.location.pathname.split('/')[2];
    this.loading = true;
    this.movieService.getMovie(movieId).subscribe((response) => {
      this.movie = response;
      console.log(this.movie);
      this.loading = false;
    });
  }
}
