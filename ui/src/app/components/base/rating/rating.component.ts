import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() currentRating: number;
  @Input() highRateLimit: number;
  @Input() showHighRate: boolean;

  constructor() { 
    this.currentRating = 0;
    this.highRateLimit = 10;
    this.showHighRate = false;
  }

  ngOnInit(): void {
  }

}
