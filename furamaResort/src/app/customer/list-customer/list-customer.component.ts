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
  nameSearch: string='';
  page=1;
  public customer!: Customer;
  constructor(private cs: CustomerServiceService) {
  }

  ngOnInit(): void {
    this.showList();
  }

  showList(){
    this.cs.getCustomers().subscribe(data => {
      console.log(data)
      this.customerList = data
      console.log(this.customerList)
    })
  }

  send(id: any) {
    console.log("id: " + id);
    this.deleteId = id;

  }

  deleteCustomer(){
    let c = this.cs.deleteById(this.deleteId).subscribe(() => {
      this.showList();
    },e =>{
      console.log(e)
    });
  }

  searchCustomer( ) {
    console.log(this.nameSearch)
    this.cs.search(this.nameSearch).subscribe(custumers => {
      this.customerList= custumers;
    })
  }


}
