import { createStore } from "redux";

const ADD_DATA = "addData";
const UPDATE_LODING = "updateLoding";
const SET_SEARCHQUERY = "setSearchQuery";
const SET_ERROR = "setError";

const addData = (data) => {
  return {
    type: ADD_DATA,
    data: data
  }
};

const searchQuery = (query) => {
  return {
    type : SET_SEARCHQUERY,
    searchQuery : query
  }
}

const reducer = (state = {
  searchQuery: "",
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
    
    case SET_SEARCHQUERY:
      return {
        ...state,
        searchQuery : action.searchQuery
      }

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
  addData,
  searchQuery
};

export default messages;