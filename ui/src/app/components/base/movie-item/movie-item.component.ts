import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movieId: number;
  @Input() movieCoverUrl: string;
  @Input() movieName: string;
  @Input() movieRating: number;
  @Output() movieActionClick: EventEmitter<number>;

  constructor() {
    this.movieId = 0;
    this.movieCoverUrl = '';
    this.movieName = '';
    this.movieRating = 0;
    this.movieActionClick = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  public onMovieActionClick(event: any): void {
    this.movieActionClick.emit(this.movieId);
  }

}
