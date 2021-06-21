import {ProductType} from "./product-type";

export interface Product {
  id: number,
  code: string,
  name: string,
  stock: number,
  price: number,
  detail: string
  productType: ProductType
}
