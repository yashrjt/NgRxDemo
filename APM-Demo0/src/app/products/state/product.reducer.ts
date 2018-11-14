///<reference path="../../../../node_modules/@angular/animations/src/animation_metadata.d.ts"/>
import {Product} from "../product";
import * as fromRoot from '../../state/app.state';
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProductActions, ProductActionTypes} from "./products.actions";

export interface State extends fromRoot.State {
  products: ProductState;
}
export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
  }
    const initialState: ProductState = {
    showProductCode: true,
    currentProduct: null,
    products: []
  };

const getProductFeatureState = createFeatureSelector<ProductState>('products')

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  state => state.currentProduct
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);



export function reducer(state= initialState, action: ProductActions) {
  switch (action.type) {
    case ProductActionTypes.ToggleProductType:
      console.log(JSON.stringify(state));
      console.log(action.payload);
      return{
        ...state,
        showProductCode: action.payload
      };
     case ProductActionTypes.LoadSucess:
        return {
          ...state,
          products: action.payload
        };

        default:
      return state;
  }
}
