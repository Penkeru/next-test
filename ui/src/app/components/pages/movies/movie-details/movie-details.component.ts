import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieModel } from '../../../../models/movie';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movieId: number;
  @Output() backClicked: EventEmitter<any>;
  public movieDetails: MovieModel;
  constructor(private apiService: ApiService) {
    this.movieDetails = null as any;
    this.movieId = 0;
    this.backClicked = new EventEmitter<any>();
  }

  ngOnInit(): void {
    if (this.movieId) {
      this.apiService.getMovieById(this.movieId).subscribe((movieDetails: MovieModel) => {
        debugger;
      });
    }
  }

}
