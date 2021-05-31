import { Component, OnInit } from '@angular/core';

import { BallsService } from '../../services/balls.service';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss']
})
export class BallSelectorComponent implements OnInit {

  public showResult: boolean = false;

  public balls: any;

  public ballSelected: any = null;

  constructor(
    private _ballsService: BallsService
  ) { }

  ngOnInit(): void {
    this.getBalls();
  }

  getBalls() {
    this._ballsService.getBalls().subscribe(
      res => {
        console.log('res', res);
        this.balls = res;
      },
      err => {
        console.error(err);
      }
    )
  }

  ballSelection(ball, index) {
    console.log(this.balls);
    this.ballSelected
      ? alert('You already have a ball selected') 
      : (
          this.ballSelected = ball,
          this.balls[index].selected = true
        )
  }

  clearSelection() {
    this.ballSelected = null;
    this.balls.map(ball => {
      ball.selected = false;
    });
  }
}
