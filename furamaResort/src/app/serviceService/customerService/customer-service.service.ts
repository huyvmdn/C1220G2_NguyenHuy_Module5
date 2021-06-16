import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import {Customer} from "../../model/customer";
import {CustomerType} from "../../model/customer-type";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  private _API_URL_CUSTOMERTYPE = 'http://localhost:8080/customerType';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };

  constructor(private httpClient: HttpClient) {
  }

  public getTypeCustomers(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this._API_URL_CUSTOMERTYPE);
  }

  public getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(API_URL + '/customer')
  }

  public postCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(API_URL + '/customer/save', customer, this.httpOptions);
  }

  public findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${API_URL}/customer/${id}`);
  }

  public putCustomer(customer: Customer, id: number): Observable<Customer> {
    return this.httpClient.put<Customer>(`${API_URL}/customer/update/${id}`, customer)
  }

  deleteById(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${API_URL}/customer/delete/${id}`);
  }


}
