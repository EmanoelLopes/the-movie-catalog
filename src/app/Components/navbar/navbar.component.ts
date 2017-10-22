import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  nav: any[];

  constructor() {
    this.nav = [
      { name: 'Filmes', link: 'movies' },
      { name: 'Gêneros', link: 'genres' }
    ];
  }

  ngOnInit() {
  }

}
