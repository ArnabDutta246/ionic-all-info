import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartTestService } from 'src/app/services/cart-test/cart-test.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit, OnDestroy {
  cartList$: Subscription;
  constructor(private cartSrv: CartTestService) { }

  ngOnInit() {
    //========getValue======
    this.cartSrv.getValue();
    //========subsctibe=======
    this.cartList$ = this.cartSrv.cartObj.subscribe((res) => {
      console.log("parent page", res);
    })
  }
  ngOnDestroy(): void {
    this.cartSrv.cartObj.next([])
    this.cartList$.unsubscribe();
    console.log("from Parent:", this.cartList$.closed)
  }

  addCart() {
    this.cartSrv.updateCart();
  }
}
