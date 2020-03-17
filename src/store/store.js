import { createStore } from "redux";

/**
 * DisasterMSG Action Type
 */
const ADD_DISASTER_MSG_DATA = "addDisasterMsgData";
const SET_MSG_SEARCHQUERY = "setMsgSearchQuery";

const addDisasterMsgData = (data) => {
  return {
    type: ADD_DISASTER_MSG_DATA,
    data: data
  }
};

const setMsgSearchQuery = (query) => {
  return {
    type: SET_MSG_SEARCHQUERY,
    searchQuery: query
  };
};


const reducer = (state = {
  disasterMsg: {
    searchQuery: "",
    data: [],
    pageNo: 1
  }
}, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_DISASTER_MSG_DATA:
      return {
        ...state,
        disasterMsg: {
          ...state.disasterMsg,
          data: state.disasterMsg.data.concat(action.data),
          pageNo: state.disasterMsg.pageNo + 1
        }
      };

    case SET_MSG_SEARCHQUERY:
      return {
        ...state,
        disasterMsg: {
          ...state.disasterMsg,
          searchQuery: action.searchQuery
        }
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  setMsgSearchQuery,
  addDisasterMsgData
};

export default store;