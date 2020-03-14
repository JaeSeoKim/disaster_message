import { createStore } from "redux";

const ADD_DATA = "addData";
const UPDATE_PAGENO = "updatePageNo";
const UPDATE_LODING = "updateLoding";
const SET_ERROR = "setError";

const addData = (value) => {
  return {
    type: ADD_DATA,
    data: value
  }
};

const updatePageNo = (value) => {
  return {
    type: UPDATE_PAGENO,
    pageNo: value
  }
};

const reducer = (state = {
  isLoding: true,
  error: null,
  data: [],
  pageNo: 1
}, action = {}) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: state.data.concat(action.data)
      };

    case UPDATE_LODING:
      return {
        ...state,
        isLoding: !state.isLoding
      };

    case UPDATE_PAGENO:
      return {
        ...state,
        pageNo: action.pageNo
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
  addData,
  updatePageNo
};

export default messages;