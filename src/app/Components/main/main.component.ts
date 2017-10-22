import { Component, OnInit } from '@angular/core';
import { GenresComponent } from '../genres/genres.component';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss', '../../../assets/scss/general.scss']
})
export class MainComponent implements OnInit {
  mainTitle: string;

  constructor() {
    this.mainTitle = 'Descobrir Novos Filmes e Séries';
   }

  ngOnInit() {
  }

}
