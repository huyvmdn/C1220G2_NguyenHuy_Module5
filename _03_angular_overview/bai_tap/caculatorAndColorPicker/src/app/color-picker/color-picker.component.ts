import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  color: String= "#000000";
  size:number= 60;
  constructor() { }

  ngOnInit(): void {
  }

}
