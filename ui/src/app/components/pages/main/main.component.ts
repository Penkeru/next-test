import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { MovieModel } from '../../../models/movie';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('movieSearchInput', { static: true }) movieSearchInput: ElementRef | any;
  public currentMoviesList: MovieModel[];
  public selectedMovieId: number;
  public searchHandler$: Observable<string>;
  public showDialog: boolean;
  constructor(private apiService: ApiService) {
    this.selectedMovieId = 0;
    this.currentMoviesList = [];
    this.showDialog = false;
    this.searchHandler$ = of('');
  }



  ngOnInit(): void {
    this.buildSearchBarHandling();
    this.apiService.getMoviesList().subscribe((moviesList: MovieModel[]) => {
      this.currentMoviesList = moviesList;
    });
  }

  private buildSearchBarHandling() {
    this.searchHandler$ = fromEvent(this.movieSearchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      , debounceTime(1000)
      , distinctUntilChanged()
    );
  }

  public showMovieDetails(movieId: number) {
    this.selectedMovieId = movieId;
    this.showDialog = true;
  }

}
