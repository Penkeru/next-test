import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from '../../../../models/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  @Input() moviesList: MovieModel[];
  @Input() searchHandler$: Observable<string> | undefined;
  @Output() movieSelected: EventEmitter<number>;
  public searchText: string;


  constructor() {
    this.searchText = '';
    this.moviesList = [];
    this.movieSelected = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.searchHandler$ && this.searchHandler$.subscribe((text) => {
      this.searchText = text;
    });
  }

  onMovieSelect(movieId: number): void {
    this.movieSelected.emit(movieId);
  }
}
