import { Component, OnInit, OnDestroy } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

import { Observable } from 'rxjs/Observable';

/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromProduct from './state/product.reducer';
import * as productActions from './state/product.actions';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products$: Observable<Product[]>;

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;

  constructor(private store: Store<fromProduct.State>,
              private productService: ProductService) { }

  ngOnInit(): void {
    // This now uses all of the state ... do we do it differently?
    // No, keep them separate because only want notifications when appropriate.

    // Do NOT subscribe here because it DOES use an async pipe
    this.products$ = this.store.pipe(select(fromProduct.getProducts)) as Observable<Product[]>;

    this.store.dispatch(new productActions.Load());

    // Subscribe here because it does not use an async pipe
    this.store.pipe(
      select(fromProduct.getCurentProduct)
    ).subscribe(product => this.selectedProduct = product);

    // Subscribe here because it does not use an async pipe
    this.store.pipe(
      select(fromProduct.getShowProductCode)
    ).subscribe(showProductCode => this.displayCode = showProductCode);
  }

  ngOnDestroy(): void {
    // TODO: Should we unsubscribe?
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new productActions.ToggleProductCode(value));
  }

  newProduct(): void {
    this.productSelected(this.productService.newProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(new productActions.SetCurrentProduct(product));
  }

}
