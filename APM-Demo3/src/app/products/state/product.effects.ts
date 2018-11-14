import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { ProductService } from '../product.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as productActions from './product.actions';
import {switchMap} from 'rxjs/internal/operators';
import {ProductActionTypes} from './product.actions';

@Injectable()
export class ProductEffects {

  constructor(private productService: ProductService,
              private actions$: Actions,
              private action$: Actions) { }

  @Effect()
  loadProducts$: Observable<Action> = this.action$.ofType(ProductActionTypes.Load).pipe(
     switchMap(action =>
       this.productService.getProducts().pipe(
         map(products => (new productActions.LoadSuccess(products))),
         catchError(err => of(new productActions.LoadFail(err)))
       )
     )
   );
 /* loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType(ProductActionTypes.Load),
   switchMap(action =>
      this.productService.getProducts().pipe(
        map(products => (new productActions.LoadSuccess(products))),
        catchError(err => of(new productActions.LoadFail(err)))
      )
    )
      );*/

}
