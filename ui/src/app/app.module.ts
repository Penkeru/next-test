import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { MainComponent } from './components/pages/main/main.component';
import { ButtonComponent } from './components/base/button/button.component';
import { RatingComponent } from './components/base/rating/rating.component';
import { MovieItemComponent } from './components/base/movie-item/movie-item.component';
import { MoviesListComponent } from './components/pages/movies-list/movies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ButtonComponent,
    RatingComponent,
    MovieItemComponent,
    MoviesListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
