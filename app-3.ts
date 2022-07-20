import { incrementadorAction } from "./contador/contador.action";
import { contadorReducer } from "./contador/contador.reducer";
import { Reducer, Action } from "./ngrx-fake/ngrx";

class Store<T> {
  constructor(private reducer: Reducer<T>, private state: T) {}
  getState() {
    return this.state;
  }
  dispatch(action: Action) {
    this.state = this.reducer(this.state, action);
  }
}
const store = new Store(contadorReducer, 10);
store.dispatch(incrementadorAction);
console.log(store.getState());
