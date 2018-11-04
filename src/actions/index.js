import { ADD_ARTICLE,REMOVE_ITEMS,FETCH_TODOS, PRODUCTOS_ITEMS } from "../constants/action-types";
import { todosRef, productos,databaseRef} from "../fire";

export const addItems = (e) => async => {
  const newMessageKey = todosRef.push().key;
  databaseRef.ref(`addCarrito/${newMessageKey}`).set({
    id: e.id,
    title: e.title,
    price: e.price
  });
};

export const addArticle = article => (
  {
    type: ADD_ARTICLE,
    payload: article
  }
);

export const fetchToDos = () => async dispatch => {
  todosRef.on("child_added", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: {
        key: snapshot.key,
        id: snapshot.val().id,
        title: snapshot.val().title,
        price: snapshot.val().price,
      }
    });
  });
};

export const Products = () => async dispatch => {
  productos.on("child_added", snapshot => {
    console.log(snapshot.val())
    dispatch({
      type: PRODUCTOS_ITEMS,
      payload: {
        key: snapshot.key,
        id: snapshot.val().id,
        title: snapshot.val().title,
        price: snapshot.val().price,
      }
    });
  });
};

export const removeItems = (item) => async dispatch => {
    dispatch({
      type: REMOVE_ITEMS,
      payload: item
    });
};
