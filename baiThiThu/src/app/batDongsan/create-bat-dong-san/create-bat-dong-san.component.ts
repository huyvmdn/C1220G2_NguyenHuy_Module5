import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductType} from "../../model/product-type";
import {ServiceService} from "../../service/service.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {DanhMuc} from "../../model/danh-muc";
import {Huong} from "../../model/huong";
import {VungMien} from "../../model/vung-mien";
@Component({
  selector: 'app-create-bat-dong-san',
  templateUrl: './create-bat-dong-san.component.html',
  styleUrls: ['./create-bat-dong-san.component.css']
})
export class CreateBatDongSanComponent implements OnInit {

  danhmuc: DanhMuc[] = [];
  public createForm!: FormGroup;
  huong: Huong[]=[];
  vungMien: VungMien[]=[];

  constructor(private fb: FormBuilder, private cs: ServiceService, private activatedRoute: ActivatedRoute, private route: Router,private toastr: ToastrService) {
    this.cs.getDanhMuc().subscribe(data => {
      // console.log((data))
      this.danhmuc = data;
      console.log(this.danhmuc)
    }, error => {
      console.log("get " + error + " at getListType on AddCustomerComponent");
    });
    this.cs.getHuong().subscribe(data => {
      // console.log((data))
      this.huong = data;
      console.log(this.huong)
    }, error => {
      console.log("get " + error + " at getListType on AddCustomerComponent");
    });
    this.cs.getvungMien().subscribe(data => {
      // console.log((data))
      this.vungMien = data;
      console.log(this.vungMien)
    }, error => {
      console.log("get " + error + " at getListType on AddCustomerComponent");
    });
    this.initForm();
  }

  ngOnInit(): void {

  }

  initForm() {
    this.createForm = this.fb.group({
      danhMuc: ['', [Validators.required]],
      vungMien: ['', [Validators.required]],
      banLa: ['', [Validators.required]],
      banDangTin: ['', [Validators.required]],
      tinhTrang: ['', [Validators.required]],
      diaChi: ['', [Validators.required]],
      dienTich: ['', [Validators.required, Validators.min(20)]],
      huong: ['', [Validators.required]],
      tuaDe: ['', [Validators.required]],
      noiDung: ['', [Validators.required]],
      gia: ['', [Validators.required,Validators.min(1000000000)]]

    });
  }
  showSuccess() {
    this.toastr.success('successfully!', 'create new product!',{
      timeOut: 3000,
      progressBar:true,
      progressAnimation: "increasing"
    });
  }

  save_update() {
    let batDongSan = this.createForm.value;
    console.log(batDongSan)
    this.cs.postBatDongSan(batDongSan).subscribe(() => {
      this.createForm.reset();
      this.showSuccess();
      this.route.navigateByUrl("list-batDongSan");
    })

  }
}
