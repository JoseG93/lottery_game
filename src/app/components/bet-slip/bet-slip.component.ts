import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent implements OnInit {

  @Input() ballSelected: any;
  @Input() balls: any;

  public userAmount: number = null;
  public totalAmount: number = null;

  public winningMultiplier: number = 1.5;
  
  public result: any = {};
  public showResult: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  checkAmount(value) {
    value < 5 ? alert('The minimun bet amount is 5€') : null;
  }

  setAmount() {
    this.userAmount < 5 ? alert('The minimun bet amount is 5€') : this.totalAmount = this.userAmount * 5;;
  }

  placeBet() {
    this.result.winnerBall = Math.floor(Math.random() * this.balls.length) + 1;
    console.log(this.result.winnerBall);
    console.log(this.ballSelected);
    this.result.winnerBall === this.ballSelected.number
      ? (
          this.result.profit = this.totalAmount * this.winningMultiplier,
          this.result.text = `You won ${this.result.profit}€`,
          this.result.statusColor = 'green'
        ) 
      : (
          this.result.text = `Sorry :( , you lost ${this.totalAmount}€`,
          this.result.status = 'red'
        )
    this.userAmount = null;
    this.totalAmount = null;
    this.showResult = true;
  }
}
