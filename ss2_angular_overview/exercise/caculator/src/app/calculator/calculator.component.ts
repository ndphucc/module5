import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  textInput = '';


  constructor() {
  }

  ngOnInit(): void {
  }

  showInput(char: string): void {
    debugger
    this.textInput += char;
    console.log(this.textInput);
  }

  showResult() {
    this.textInput = eval(this.textInput);
  }

}
