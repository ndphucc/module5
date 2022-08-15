import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color = {
    red: 0,
    blue: 0,
    green: 0
  }
  background:string = "rgb(" + this.color.red + "," + this.color.blue + "," + this.color.green + ")";

  constructor() {
  }

  ngOnInit(): void {
  }

  showColor(): void {
    this.background = "rgb(" + this.color.red + "," + this.color.blue + "," + this.color.green + ")";
  }

}
