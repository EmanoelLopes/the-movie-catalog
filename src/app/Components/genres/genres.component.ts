import { Component, OnInit } from '@angular/core';
import { Genres } from './genres';
import { GenresService } from './genres.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  loading = false;
  genres: Genres[];

  constructor(private genresService: GenresService) { }

  ngOnInit() {
    this.getGenres();
  }

  getGenres() {
    this.loading = true;
    this.genresService.getGenres().subscribe((response) => {
      this.genres = response['genres'];
      this.loading = false;
    });
  }

}
