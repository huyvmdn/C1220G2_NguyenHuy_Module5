import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../../model/customer-type";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../../serviceService/customerService/customer-service.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  listType: CustomerType[] = [];
  public form!: FormGroup;
  private updateId!: number;
  private customer!: Customer;

  constructor(private fb: FormBuilder, private cs: CustomerServiceService, private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.cs.getTypeCustomers().subscribe(data => {

      this.listType = data;
      console.log(this.listType)
    }, error => {
      console.log("get " + error + " at getListType on AddCustomerComponent");
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.updateId = parseInt(<string>paramMap.get('id'));
      console.log(this.updateId)});
      // @ts-ignore
   this.cs.findById(this.updateId)._subscribe(data=>{
     // console.log(data)
     this.customer=data['body'];
     console.log(this.customer);
     this.initForm();

   });

  }

  private initForm() {

    this.form = this.fb.group({
      code: [this.customer.code, [Validators.required, Validators.pattern('^KH-[\\d]{4}$')]],
      name: [this.customer.name, [Validators.required]],
      gender: [this.customer.gender, [Validators.required]],
      idCard: [this.customer.idCard, [Validators.required, Validators.pattern('^([0-9]{9}|[0-9]{12})$')]],
      phone: [this.customer.phone, [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$')]],
      customerType: [this.customer.customerType, [Validators.required]],
      birthday: [this.customer.birthday, [Validators.required, Validators.pattern('^([12][09][0-9]{2}-[01][0-9]-[0123][0-9])$')]],
      email: [this.customer.email, [Validators.required, Validators.email]],
      address: [this.customer.address, [Validators.required, Validators.minLength(5)]]
    })
  }

  save_update() {
    let customer = this.form.value;
    console.log(customer)
    this.cs.putCustomer(customer, this.updateId).subscribe(() => {
      this.form.reset();
      alert('successfully');
    })
  }
}
