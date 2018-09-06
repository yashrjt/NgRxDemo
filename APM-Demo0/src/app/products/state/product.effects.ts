import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {ProductService} from "../product.service";
import {Observable , of} from "rxjs/index";
import {Action} from "@ngrx/store";
import {catchError, map, mergeMap} from "rxjs/internal/operators";
import * as productActions from './products.actions';

@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private productService: ProductService) {}

  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.Load),
    mergeMap(action =>
      this.productService.getProducts().pipe(
        map(products => (new productActions.LoadSuccess(products))),
        catchError(err => of(new productActions.LoadFail(err)))
      )
    )
  );
}
