import mang1Reducer from './reducers/mang1Reducer';
import giatriReducer from './reducers/giatriReducer';

var redux = require('redux');
var oldState = {
  mang1: ["man hinh","chuot","ban phim"],
  giatri: true
}
// var reducer1 = (state=oldState,action)=>{
//   switch (action.type) {
//     case "CHANGE_EDIT_STATUS":
//       return {...state,giatri:!state.giatri}
//     case "ADD_NEW":
//       // return {...state,mang1:[...state.mang1,"Tivi LCD"]}
//       return {...state,mang1:[...state.mang1,action.newItem]}
//     case "DELETE":
//       return {...state,mang1:[...state.mang1.filter((value,i)=> i !== action.delete)]}
//     default:
//       break;
//   }
//   return state;
// }

const allReducers = redux.combineReducers({
    mang1:mang1Reducer,
    giatri:giatriReducer
})

var store1 = redux.createStore(allReducers);
store1.subscribe(()=>{
  // console.log(store1.getState());
  console.log(JSON.stringify(store1.getState()))
})
store1.dispatch({type:"CHANGE_EDIT_STATUS"});
// console.log(store1.getState());
store1.dispatch({
  type:"ADD_NEW",
  newItem: "Tai nghe"
});
// console.log(store1.getState());
// store1.dispatch({
//   type:"DELETE",
//   delete:2
// })
// console.log(store1.getState());

export default store1;