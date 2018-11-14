import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import * as fromProduct from '../../state/product.reducer';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ProductEditComponent} from './product-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Product} from '../../product';
import {By} from '@angular/platform-browser';
const products: Product[] = [
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

describe('My Component', () => {
  let component: ProductEditComponent;
  let fixture: ComponentFixture<ProductEditComponent>;
    beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductEditComponent,
     ],
      imports: [ReactiveFormsModule],
      schemas : [NO_ERRORS_SCHEMA]
    });
          fixture = TestBed.createComponent(ProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
     });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
 /* it('selectedProducts displays productedit component', () => {
    let selectedProduct: Product = component.selectedProduct ;
    selectedProduct = null;
    component.ngOnChanges(selectedProduct);
  });*/
 /*it('shuld delete a product from ProductEdit', () => {
   const deleteProduct: Product = {
       'id': 1,
       'productName': 'Leaf Rake',
       'productCode': 'GDN-0011',
       'description': 'Leaf rake with 48-inch wooden handle',
       'starRating': 3.2
     };
   spyOn(component.delete, 'emit');
   component.deleteProduct();
   expect(component.delete.emit).toHaveBeenCalledWith(deleteProduct);
 });*/
});
