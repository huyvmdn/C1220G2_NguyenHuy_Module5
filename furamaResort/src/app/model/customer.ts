import {CustomerType} from "./customer-type";

export interface Customer {
  id?: number;
  code: string;
  name: string;
  birthday: string;
  gender: boolean;
  idCard: string;
  phone: string;
  email: string;
  address: string;
  customerType: CustomerType;
}
