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
  constructor(private apiService: ApiService) {
    this.currentMoviesList = [];
  }

  ngOnInit(): void {
    this.apiService.getMoviesList().subscribe((moviesList: MovieModel[])=>{
      this.currentMoviesList = moviesList;
    });
  }

  public showMovieDetails(movieId:number){
    
  }

}
