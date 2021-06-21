import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Product} from "../model/product";
import {environment} from "../../environments/environment";
import {DanhMuc} from "../model/danh-muc";
import {Huong} from "../model/huong";
import {VungMien} from "../model/vung-mien";
import {BatDongSan} from "../model/bat-dong-san";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private _API_URL_DANHMUC = 'http://localhost:3000/danhMuc';
  private _API_URL_HUONG = 'http://localhost:3000/huong';
  private _API_URL_VUNGMIEN = 'http://localhost:3000/vungMien';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };

  constructor(private httpClient: HttpClient) {
  }

  public getDanhMuc(): Observable<DanhMuc[]> {
    return this.httpClient.get<DanhMuc[]>(this._API_URL_DANHMUC);
  }
  public getHuong(): Observable<Huong[]> {
    return this.httpClient.get<Huong[]>(this._API_URL_HUONG);
  }
  public getvungMien(): Observable<VungMien[]> {
    return this.httpClient.get<VungMien[]>(this._API_URL_VUNGMIEN);
  }
  public getBatDongSan(): Observable<BatDongSan[]> {
    return this.httpClient.get<BatDongSan[]>(API_URL + '/batDongSan')
  }
  getProduct(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(API_URL + '/product')
  }


  public findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${API_URL}/product/${id}`);
  }

  public putCustomer(customer: Product, id: number): Observable<Product> {
    return this.httpClient.put<Product>(`${API_URL}/product/${id}`, customer)
  }

  deleteById(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${API_URL}/product/${id}`);
  }


  search(nameSearch: string, code: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL + '/product?name_like=' + nameSearch+ '&code_like='+code)
  }

  searchFull(nameSearch: string, codeSearch: string, price1: any, price2: any):Observable<Product[]> {
    let value="";
    if(nameSearch){
      value+=`name_like=${nameSearch}`
    }
    if (codeSearch){
      value+=`code_like=${codeSearch}`
    }
    if (price1){
      value+=`&price_gte=${price1}`
    }
    if (price2){
      value+=`&price_lte=${price2}`
    }
    return this.httpClient.get<Product[]>(API_URL+'/product?'+value)
  }

  sort() : Observable<Product[]>{
  return this.httpClient.get<Product[]>(API_URL + '/product?_sort=price&_order=desc&_limit=2');
  }


  public getType(): Observable<DanhMuc[]> {
    return this.httpClient.get<DanhMuc[]>('http://localhost:3000/danhMuc');
  }

  public postCustomer(customer: Product): Observable<Product> {
    return this.httpClient.post<Product>(API_URL + '/product', customer, this.httpOptions);
  }

  postBatDongSan(batDongSan: BatDongSan):Observable<BatDongSan> {
    return this.httpClient.post<BatDongSan>(API_URL + '/batDongSan', batDongSan, this.httpOptions);
  }

  searchDienTich(dienTich: any): Observable<BatDongSan[]> {
    return this.httpClient.get<BatDongSan[]>(API_URL + '/batDongSan?dienTich=' + dienTich)
  }

  searchHuong(huong: Huong): Observable<BatDongSan[]> {
  return this.httpClient.get<BatDongSan[]>(API_URL + `/batDongSan?huong['id']=` + huong.id)
  }

  searchGia(gia: any) : Observable<BatDongSan[]>{
    return this.httpClient.get<BatDongSan[]>(API_URL + '/batDongSan?gia=' + gia)
  }

  searchFullBatDongSan(gia: any, dienTich: any): Observable<BatDongSan[]> {
    return this.httpClient.get<BatDongSan[]>(API_URL + '/batDongSan?gia_like=' + gia+ '&dienTich_like='+dienTich)
  }
}
