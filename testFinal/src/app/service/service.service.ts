// import { Injectable } from '@angular/core';
// import {Observable} from "rxjs";
// import {HttpClient, HttpHeaders} from "@angular/common/http";
// import {environment} from "../../environments/environment";
// const API_URL = `${environment.apiUrl}`;
// @Injectable({
//   providedIn: 'root'
// })
// export class ServiceService {
//
//   private _API_URL_CUSTOMERTYPE = 'http://localhost:3000/types';
//   private httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       // Authorization: 'my-auth-token'
//     }),
//   };
//
//   constructor(private httpClient: HttpClient) {
//   }
//
//   public getType(): Observable<ProductType[]> {
//     return this.httpClient.get<ProductType[]>(this._API_URL_CUSTOMERTYPE);
//   }
//
//   public getProduct(): Observable<Product[]> {
//     return this.httpClient.get<Product[]>(API_URL + '/product')
//   }
//
//   public postCustomer(customer: Product): Observable<Product> {
//     return this.httpClient.post<Product>(API_URL + '/product', customer, this.httpOptions);
//   }
//
//   public findById(id: number): Observable<Product> {
//     return this.httpClient.get<Product>(`${API_URL}/product/${id}`);
//   }
//
//   public putCustomer(customer: Product, id: number): Observable<Product> {
//     return this.httpClient.put<Product>(`${API_URL}/product/${id}`, customer)
//   }
//
//   deleteById(id: number): Observable<Product> {
//     return this.httpClient.delete<Product>(`${API_URL}/product/${id}`);
//   }
//
//
//   search(nameSearch: string, code: string): Observable<Product[]> {
//     return this.httpClient.get<Product[]>(API_URL + '/product?name_like=' + nameSearch+ '&code_like='+code)
//   }
// }
