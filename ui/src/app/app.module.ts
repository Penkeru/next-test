// Modules
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//components
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/base/button/button.component';
import { ModalComponent } from './components/base/modal/modal.component';
import { MovieItemComponent } from './components/base/movie-item/movie-item.component';
import { RatingComponent } from './components/base/rating/rating.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { MainComponent } from './components/pages/main/main.component';
import { MovieDetailsComponent } from './components/pages/movies/movie-details/movie-details.component';
import { MoviesListComponent } from './components/pages/movies/movies-list/movies-list.component';
// pipes
import { MovieFilterPipe } from './pipes/movie-filter.pipe';


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
    MovieDetailsComponent,
    ModalComponent,
    MovieFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
