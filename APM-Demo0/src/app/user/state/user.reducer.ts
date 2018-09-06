import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserActions, UserActionTypes} from "./user.action";

export interface UserState {
  userName: boolean;
}
const initialState: UserState = {
  userName: true
};
const getFeatureSelector = createFeatureSelector<UserState>('user');
export const getMaskUserName = createSelector(
  getFeatureSelector,
  state => state.userName
);

export function reducer (state= initialState, action: UserActions) {
  switch (action.type) {
    case  UserActionTypes.MaskUserName:
      console.log(JSON.stringify(state));
      console.log(action.payload);
    return{
      ...state,
      userName: action.payload
    };
    default:
      return state;
  }
}
