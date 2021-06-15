import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  number1: number | undefined;
  number2: number | undefined;
  result: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  sum() {
    // @ts-ignore
    this.result=this.number1+this.number2;
  }

  minus() {
    // @ts-ignore
    this.result=this.number1-this.number2;
  }
  multiply() {
    // @ts-ignore
    this.result=this.number1*this.number2;
  }
  division() {
    // @ts-ignore
    this.result=this.number1/this.number2;
  }
}
