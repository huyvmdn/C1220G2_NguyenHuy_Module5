import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../../serviceService/customerService/customer-service.service";
import {CustomerType} from "../../model/customer-type";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  listType: CustomerType[] = [];
  public createForm!: FormGroup;

  constructor(private fb: FormBuilder, private cs: CustomerServiceService) {
    this.cs.getTypeCustomers().subscribe(data => {
      // console.log((data))
      this.listType = data;
      console.log(this.listType)
    }, error => {
      console.log("get " + error + " at getListType on AddCustomerComponent");
    });
    this.initForm();
  }

  ngOnInit(): void {

  }

  initForm() {
    this.createForm = this.fb.group({
      code: ['', [Validators.required, Validators.pattern('^KH-[\\d]{4}$')]],
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      idCard: ['', [Validators.required, Validators.pattern('^([0-9]{9}|[0-9]{12})$')]],
      phone: ['', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$')]],
      customerType: ['', [Validators.required]],
      birthday: ['', [Validators.required, Validators.pattern('^([12][09][0-9]{2}-[01][0-9]-[0123][0-9])$')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(5)]]

    });
  }

  save_update() {
    let customer = this.createForm.value;
    this.cs.postCustomer(customer).subscribe(() => {
      this.createForm.reset();
      alert('successfully');
    })
  }

}
