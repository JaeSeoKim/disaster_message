import { createStore } from "redux";

const ADD_DATA = "addData";
const UPDATE_LODING = "updateLoding";
const SET_ERROR = "setError";

const addData = (data) => {
  return {
    type: ADD_DATA,
    data: data
  }
};

const reducer = (state = {
  isLoding: true,
  error: null,
  data: [],
  pageNo: 1
}, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: state.data.concat(action.data),
        pageNo: state.pageNo + 1
      };

    case UPDATE_LODING:
      return {
        ...state,
        isLoding: !state.isLoding
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};

const messages = createStore(reducer);

export const actionCreators = {
  addData
};

export default messages;