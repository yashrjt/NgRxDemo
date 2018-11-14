import { UserState } from '../user/state/user.reducer';
import {RouterReducerState} from '@ngrx/router-store';
import {Params} from '@angular/router';



// Representation of the entire app state
// Extended by lazy loaded modules
export interface State {
  user: UserState;
  }
