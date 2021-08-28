import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieModel } from '../../../models/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: MovieModel;
  @Output() movieActionClick = new EventEmitter<number>();
  public movieName: string;

  constructor() {
    this.movieName = '';
    this.movie = null as any;
  }

  ngOnInit(): void {
    this.movieName = this.movie.title + '(' + this.movie.released + ')';
  }

  public onMovieActionClick(event: any): void {
    this.movieActionClick.emit(this.movie.id);
  }

}
