import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {CustomerServiceService} from "../../serviceService/customerService/customer-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
