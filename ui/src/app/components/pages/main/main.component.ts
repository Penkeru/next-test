import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../../../models/movie';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public currentMoviesList: MovieModel[];
  public selectedMovieId: number;
  public showDialog: boolean;
  constructor(private apiService: ApiService) {
    this.selectedMovieId = 0;
    this.currentMoviesList = [];
    this.showDialog = false;
  }


  ngOnInit(): void {
    this.apiService.getMoviesList().subscribe((moviesList: MovieModel[]) => {
      this.currentMoviesList = moviesList;
    });
  }

  public showMovieDetails(movieId: number) {
    this.selectedMovieId = movieId;
    this.showDialog = true;
  }

}
