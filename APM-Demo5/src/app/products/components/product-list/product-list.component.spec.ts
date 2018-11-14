/*
import {ProductListComponent} from './product-list.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ProductShellComponent} from '../../containers/product-shell/product-shell.component';
import {By} from '@angular/platform-browser';
import {Product} from '../../product';

describe('Product list component', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent, ProductShellComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add new Item to products array', () => {
    let products: Product[] = [
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
    let newProduct= {
      'id': 100,
      'productName': 'Laptop',
      'productCode': '12345',
      'description': 'Hp Pavillion',
      'starRating': 4.0
    }
    expect(products.length).toEqual(5);
    fixture.detectChanges();
    component.

    });
});
*/
