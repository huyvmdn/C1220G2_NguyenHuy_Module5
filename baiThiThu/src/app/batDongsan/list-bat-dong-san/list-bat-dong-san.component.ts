import {Component, OnInit} from '@angular/core';

import {ServiceService} from "../../service/service.service";
import Swal from 'sweetalert2';
import {BatDongSan} from "../../model/bat-dong-san";
import {DanhMuc} from "../../model/danh-muc";
import {Huong} from "../../model/huong";

@Component({
  selector: 'app-list-bat-dong-san',
  templateUrl: './list-bat-dong-san.component.html',
  styleUrls: ['./list-bat-dong-san.component.css']
})
export class ListBatDongSanComponent implements OnInit {
  batDongSans: BatDongSan[] = [];
  danhmuc:DanhMuc[]=[];
  huongs:Huong[]=[];
  huong!: Huong;
  dienTich: any;
  page = 1;
  public batDongSan!: BatDongSan;
  codeSearch: string = '';

  price2: any;
  gia: any;

  constructor(private cs: ServiceService) {
  }

  ngOnInit(): void {
    this.showDanhMuc();
    this.showHuong();
    this.showList();
  }

  showList() {
    this.cs.getBatDongSan().subscribe(data => {
      console.log(data)
      this.batDongSans = data
      console.log(this.batDongSans)
    })
  }
  showDanhMuc() {
    this.cs.getDanhMuc().subscribe(data => {
      console.log(data)
      this.danhmuc = data
      console.log(this.danhmuc)
    })
  }
  showHuong() {
    this.cs.getHuong().subscribe(data => {
      console.log(data)
      this.huongs = data
      console.log(this.danhmuc)
    })
  }




  searchDienTich() {
    console.log(this.dienTich)
    this.cs.searchDienTich(this.dienTich).subscribe(batDongSans => {
      this.batDongSans = batDongSans;
    })
  }
  searchGia() {
    console.log(this.gia)
    this.cs.searchGia(this.gia).subscribe(batDongSans => {
      this.batDongSans = batDongSans;
    })
  }

  searchHuong() {
    console.log(this.huong)
    this.cs.searchHuong(this.huong).subscribe(batDongSans => {
      this.batDongSans = batDongSans;
    })
  }

  searchFullBatDongSan() {
    this.cs.searchFullBatDongSan(this.gia, this.dienTich).subscribe(batDongSans => {
      this.batDongSans = batDongSans;
    })
  }
}
