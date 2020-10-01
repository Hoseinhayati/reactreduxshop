import { createStore } from "redux";
import defaultReducer from "../Reducers/defaultReducer";

 
export function configureDefaultSetting() {
  const store = createStore(defaultReducer);
  return store;
}