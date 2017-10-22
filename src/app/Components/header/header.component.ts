import { Component, Inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../../assets/scss/general.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  text: string;
  list: any[];
  slider: any;

  constructor() {
    this.title = 'The Movie Catalog';
    this.list = ['item one', 'item two', 'item three'];
  }

  ngOnInit() {
  }

}
