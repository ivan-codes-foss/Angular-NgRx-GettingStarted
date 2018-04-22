import { Product } from '../product';

/* NgRx */
import { Action } from '@ngrx/store';

export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle Product Code',
  ClearCurrentProduct = '[Product] Clear Current Product',
  SetCurrentProduct = '[Product] Set Current Product',
  Load = '[Product] Load',
  LoadSuccess = '[Product] Load Success',
  LoadFail = '[Product] Load Fail',
  UpdateProduct = '[Product] Update Product',
  UpdateProductSuccess = '[Product] Update Product Success',
  UpdateProductFail = '[Product] Update Product Fail',
  CreateProduct = '[Product] Create Product',
  CreateProductSuccess = '[Product] Create Product Success',
  CreateProductFail = '[Product] Create Product Fail',
  DeleteProduct = '[Product] Delete Product',
  DeleteProductSuccess = '[Product] Delete Product Success',
  DeleteProductFail = '[Product] Delete Product Fail'
}

// Action Creators
/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;

  constructor(public payload: boolean) {}
}

export class ClearCurrentProduct implements Action {
  readonly type = ProductActionTypes.ClearCurrentProduct;

  constructor() {}
}

export class SetCurrentProduct implements Action {
  readonly type = ProductActionTypes.SetCurrentProduct;

  constructor(public payload: Product) {}
}

export class Load implements Action {
  readonly type = ProductActionTypes.Load;

  constructor() {}
}

export class LoadSuccess implements Action {
  readonly type = ProductActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {}
}

export class LoadFail implements Action {
  readonly type = ProductActionTypes.LoadFail;

  constructor(public payload: string) {}
}

export class UpdateProduct implements Action {
  readonly type = ProductActionTypes.UpdateProduct;

  constructor(public payload: Product) {}
}

export class UpdateProductSuccess implements Action {
  readonly type = ProductActionTypes.UpdateProductSuccess;

  constructor(public payload: Product) {}
}

export class UpdateProductFail implements Action {
  readonly type = ProductActionTypes.UpdateProductFail;

  constructor(public payload: string) {}
}

export class CreateProduct implements Action {
  readonly type = ProductActionTypes.CreateProduct;

  constructor(public payload: Product) {}
}

export class CreateProductSuccess implements Action {
  readonly type = ProductActionTypes.CreateProductSuccess;

  constructor(public payload: Product) {}
}

export class CreateProductFail implements Action {
  readonly type = ProductActionTypes.CreateProductFail;

  constructor(public payload: string) {}
}

export class DeleteProduct implements Action {
  readonly type = ProductActionTypes.DeleteProduct;

  constructor(public payload: Product) {}
}

export class DeleteProductSuccess implements Action {
  readonly type = ProductActionTypes.DeleteProductSuccess;

  constructor(public payload: Product) {}
}

export class DeleteProductFail implements Action {
  readonly type = ProductActionTypes.DeleteProductFail;

  constructor(public payload: string) { }
}

// Union the valid types
export type ProductActions = ToggleProductCode
  | ClearCurrentProduct
  | SetCurrentProduct
  | Load
  | LoadSuccess
  | LoadFail
  | UpdateProduct
  | UpdateProductSuccess
  | UpdateProductFail
  | CreateProduct
  | CreateProductSuccess
  | CreateProductFail
  | DeleteProduct
  | DeleteProductSuccess
  | DeleteProductFail;

