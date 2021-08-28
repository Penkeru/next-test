import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieModel } from '../../../../models/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  @Input() moviesList: MovieModel[];
  @Output() movieSelected: EventEmitter<number>;
  constructor() {
    this.moviesList = [];
    this.movieSelected = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  onMovieSelect(movieId: number): void {
    this.movieSelected.emit(movieId);
  }
}
