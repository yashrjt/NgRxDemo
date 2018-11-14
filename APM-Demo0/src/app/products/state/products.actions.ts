import {Action} from "@ngrx/store";
import {Product} from "../product";


export enum ProductActionTypes {
  ToggleProductType = '[Product]Toggle Product Code',
  Load= '[Product] Load',
  LoadSucess= '[Product] Load Sucess',
  LoadFail= '[Product] Load Fail',
 }
 export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductType;
  constructor(public payload: boolean) {}
 }
export class Load implements Action {
  readonly type = ProductActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = ProductActionTypes.LoadSucess;
  constructor(public payload: Product[]) {}
}
export class LoadFail implements Action {
  readonly type = ProductActionTypes.LoadFail;
  constructor(public payload: string) {}
}
 export type ProductActions= ToggleProductCode
   |Load | LoadSuccess |LoadFail;
