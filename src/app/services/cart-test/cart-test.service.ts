import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface ProductsInterface {
  product_name: string;
  product_id: string;
  product_image: string;
  product_price: number;
}
export interface DummyCart extends ProductsInterface {
  product_quantity: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartTestService {
  //===========[Init Cart List]==============
  public cartList: ProductsInterface[] = [
    { 'product_id': '1', 'product_image': 'https://www.amazon.in/Puma-Mens-Running-Shoes/dp/B01EAGZC0C', 'product_name': 'puma zest', 'product_price': 100 },
    { 'product_id': '2', 'product_image': "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/376209/02/sv01/fnd/IND/fmt/png/Amare-Men's-Running-Shoes", 'product_name': 'puma power', 'product_price': 200 }
  ]

  //===========[Create Observables]==========
  public cartObj = new BehaviorSubject<DummyCart[]>([]);
  constructor() { }
  getValue() {
    let get_value = this.cartObj.getValue();
    let value = this.cartObj.value;
    console.log("get_value", get_value);
    console.log("value", value);
  }
  updateCart() {
    this.cartObj.next(this.cartList as DummyCart[])
  }
  newAddCart() {

  }


}
