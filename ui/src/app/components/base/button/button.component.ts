import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonLabel: string;
  @Input() isBackButton: boolean;
  @Output() buttonClick: EventEmitter<any>;

  constructor() {
    this.buttonLabel = '';
    this.isBackButton = false;
    this.buttonClick = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

}
