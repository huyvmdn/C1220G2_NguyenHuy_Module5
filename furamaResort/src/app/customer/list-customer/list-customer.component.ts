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
  deleteId : number=0;
  deleteCode:string='';
  customer!: Customer;
  constructor(private cs: CustomerServiceService) {

  }

  ngOnInit(): void {
    this.cs.getCustomers().subscribe(data => {
      console.log(data)
      this.customerList = data
      console.log(this.customerList)
    })
  }

  send(id: number) {
    this.deleteId = id;
    this.cs.findById(id).subscribe(data =>{
      this.customer = data;
      this.deleteCode = this.customer.code;
    });
  }
  deleteCustomer(){
    let c = this.cs.deleteById(this.deleteId).subscribe(() => {
      this.cs.getCustomers();
    },e =>{
      console.log(e)
    });
  }
}
