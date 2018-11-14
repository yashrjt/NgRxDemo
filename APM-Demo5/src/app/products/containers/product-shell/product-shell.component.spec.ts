import {ProductShellComponent} from './product-shell.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {combineReducers, Store, StoreModule} from '@ngrx/store';
import * as fromProduct from '../../state/product.reducer';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ProductActionTypes} from '../../state/product.actions';
import * as productActions from '../../state/product.actions';
import {Product} from '../../product';

describe('My Component', () => {
  let component: ProductShellComponent;
  let fixture: ComponentFixture<ProductShellComponent>;
  let store: Store<fromProduct.ProductState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          products: combineReducers(fromProduct.reducer),
        }),
        // other imports
      ],
      declarations: [
        ProductShellComponent
      ],
      schemas : [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(ProductShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
  });


  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an action to load products ', () => {
    const action = new productActions.Load();
    component.ngOnInit();
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
  it('should save  a  new product', () => {
    const $event: Product = {
      'id': 10,
      'productName': 'Video Game Controller',
      'productCode': 'GMG-0042',
      'description': 'Standard two-button video game controller',
      'starRating': 4.6
    };
        console.log(component.products$);
    const action = new productActions.CreateProduct($event);
    component.saveProduct($event);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    });

  it('should delete a product', () => {
    const $event: Product = {
      'id': 10,
      'productName': 'Video Game Controller',
      'productCode': 'GMG-0042',
      'description': 'Standard two-button video game controller',
      'starRating': 4.6
    };
    const action = new productActions.DeleteProduct($event.id);
    component.deleteProduct($event);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
