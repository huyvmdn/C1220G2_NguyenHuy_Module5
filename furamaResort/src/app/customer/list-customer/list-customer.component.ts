import {Component, OnInit} from '@angular/core';
import {CustomerServiceService} from "../../serviceService/customerService/customer-service.service";
import {Customer} from "../../model/customer";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[] = [];

  constructor(private cs: CustomerServiceService) {

  }

  ngOnInit(): void {
    this.cs.getCustomers().subscribe(data => {
      console.log(data)
      this.customerList = data
      console.log(this.customerList)
    })
  }

}
