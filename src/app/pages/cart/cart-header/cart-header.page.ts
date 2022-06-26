import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartTestService, DummyCart } from 'src/app/services/cart-test/cart-test.service';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.page.html',
  styleUrls: ['./cart-header.page.scss'],
})
export class CartHeaderPage implements OnInit, OnDestroy {
  cartList$: Subscription;
  cartListLength: number;
  constructor(private cartSrv: CartTestService) { }

  ngOnInit() {
    //========subsctibe=======
    this.cartList$ = this.cartSrv.cartObj.subscribe((res: DummyCart[]) => {
      console.log("child page", res);
      this.cartListLength = res.length;
    })
  }
  ngOnDestroy(): void {
    this.cartList$.unsubscribe();
    console.log("from child:", this.cartList$.closed)
  }

}
