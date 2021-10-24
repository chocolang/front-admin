import { combineReducers } from "redux";
// import account from './account';
// import articleMap from './articleMap';
import auth from "./auth";
// import favorite from './favorite';
// import loading from './loading';
// import error from './error';
// import filter from './filter';

const rootReducer = combineReducers({
  //account,
  auth,
  //articleMap,
  //favorite,
  //filter,
  //loading,
  //error,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
