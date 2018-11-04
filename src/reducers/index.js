import { ADD_ARTICLE,FETCH_TODOS,REMOVE_ITEMS, PRODUCTOS_ITEMS } from "../constants/action-types";
import { combineReducers} from 'redux';
import {todosRef} from './../fire';


const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
    return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

const stateCart = {
  addCart: []
};

const firedatabase = (state = stateCart, action) => {
  switch (action.type) {
    case FETCH_TODOS:
    return { ...state, addCart: [...state.addCart, action.payload] };
    case REMOVE_ITEMS:
    let bla = state.addCart.filter((post)=>post.key !== action.payload)
    return { ...state, addCart: bla};
   
    default:
      return state;
  }
};
const stateProducts = {
  items: []
};
const firedatabaseProductos = (state = stateProducts, action) => {
  switch (action.type) {
    case PRODUCTOS_ITEMS:
    return { ...state, items: [...state.items, action.payload] }; 
    default:
      return state;
  }
};

let reducer = combineReducers({ rootReducer, firedatabase,firedatabaseProductos });
export default reducer;