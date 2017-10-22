import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { GenresComponent } from './Components/genres/genres.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { MovieComponent } from './Components/movie/movie.component';
import { MainComponent } from './Components/main/main.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MoviesByGenreComponent } from './Components/movies-by-genre/movies-by-genre.component';

// Services
import { MovieService } from './Components/movie/movie.service';
import { MoviesService } from './Components/movies/movies.service';
import { GenresService } from './Components/genres/genres.service';
import { MoviesByGenreService } from './Components/movies-by-genre/movies-by-genre.service';

// Routes
const AppRoutes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'genres/movies/:id', component: MoviesByGenreComponent },
  { path: '', component: MoviesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GenresComponent,
    MovieComponent,
    MainComponent,
    NavbarComponent,
    MoviesComponent,
    MoviesByGenreComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      AppRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MoviesService,
    MovieService,
    GenresService,
    MoviesByGenreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
