import { StoreCreator } from "redux";

const reducer = (state = {}, action = {}) => {
  switch (action.key) {
    default:
      return state;
  }
};

const messages = StoreCreator(reducer);
