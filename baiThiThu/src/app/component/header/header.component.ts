import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";

import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentNavItem: any;



  constructor() {
  }


  ngOnInit(): void {
  }

}
