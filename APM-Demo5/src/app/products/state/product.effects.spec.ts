import {Actions} from '@ngrx/effects';
import {empty} from 'rxjs/internal/Observer';
import {Observable, of} from 'rxjs';
import { hot, cold  } from 'jasmine-marbles';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ProductService} from '../product.service';
import * as fromEffects from './product.effects';
import * as fromActions from './product.actions';
import {provideMockActions} from '@ngrx/effects/testing';

/*export class TestActions extends Actions {
  constructor() {
    super();
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}*/

describe('Product Effects', () => {
  let actions$: Observable<any>;
  let service: ProductService;
  let effects: fromEffects.ProductEffects;

  const products = [
    {
      'id': 1,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'description': 'Leaf rake with 48-inch wooden handle',
      'starRating': 3.2
    },
    {
      'id': 2,
      'productName': 'Garden Cart',
      'productCode': 'GDN-0023',
      'description': '15 gallon capacity rolling garden cart',
      'starRating': 4.2
    },
    {
      'id': 5,
      'productName': 'Hammer',
      'productCode': 'TBX-0048',
      'description': 'Curved claw steel hammer',
      'starRating': 4.8
    },
    {
      'id': 8,
      'productName': 'Saw',
      'productCode': 'TBX-0022',
      'description': '15-inch steel blade hand saw',
      'starRating': 3.7
    },
    {
      'id': 10,
      'productName': 'Video Game Controller',
      'productCode': 'GMG-0042',
      'description': 'Standard two-button video game controller',
      'starRating': 4.6
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductService,
        fromEffects.ProductEffects,
        provideMockActions(() => actions$),
        /*{ provide: Actions, useFactory: getActions },*/
      ],
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(ProductService);
    effects = TestBed.get(fromEffects.ProductEffects);
    spyOn(service, 'getProducts').and.returnValue(of(products));
  });

  describe('loadProducts$', () => {
    it('should return a collection from products', () => {
      const action = new fromActions.Load();
      const completion = new fromActions.LoadSuccess(products);

      /*actions$.stream = hot('-a', { a: action });*/
      actions$ = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.loadProducts$).toBeObservable(expected);

 /*     expectObservable(actions$.stream).toBe(expected);*/
    });
  });
});
