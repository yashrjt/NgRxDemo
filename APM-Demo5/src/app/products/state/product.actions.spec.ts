import * as fromProduct from './product.actions';
import {Load, LoadFail, LoadSuccess, ProductActions, ToggleProductCode} from './product.actions';

describe('Test Product Actions' , () => {

  it('should create Toggleproductcode action', () => {
    const payload = true;
    const action = new ToggleProductCode(payload);
    expect(action.type).toEqual(fromProduct.ProductActionTypes.ToggleProductCode)
  })
  it('should create Load action', () => {
    const action = new Load();
    expect(action.type).toEqual(fromProduct.ProductActionTypes.Load)
  })
  it('should create LoadSuccess action', () => {
    const payload =  [
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
      }];
    const action = new LoadSuccess(payload);
    expect(action.type).toEqual(fromProduct.ProductActionTypes.LoadSuccess)
  })
  it('should create LoadFail action', () => {
    const payload = 'Load failed';
    const action = new LoadFail(payload);
    expect(action.type).toEqual(fromProduct.ProductActionTypes.LoadFail)
  })
});
