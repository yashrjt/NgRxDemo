import * as fromProductActions from './product.actions';
import * as fromProductReducer from './product.reducer';
import {SetCurrentProduct, ToggleProductCode} from './product.actions';

describe('Test Product Reducer ' , () => {
  const {initialState} = fromProductReducer;
  it('should return default state', () => {
    const action = {} as any;
    const state = fromProductReducer.reducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should toggle the product codes' ,() =>{
    const payload = false;
    const action = new ToggleProductCode(payload);
    const state = fromProductReducer.reducer(initialState, action);
    expect(state.showProductCode).toBe(false);
  })

  it('should set Product Id' ,() =>{
    const payload = {
        'id': 1,
        'productName': 'Leaf Rake',
        'productCode': 'GDN-0011',
        'description': 'Leaf rake with 48-inch wooden handle',
        'starRating': 3.2
      };
    const action = new SetCurrentProduct(payload);
    const state = fromProductReducer.reducer(initialState, action);
    expect(state.currentProductId).toBe(1);
  })
})
