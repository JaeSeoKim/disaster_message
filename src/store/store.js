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

/**
 * MaskMap Action Type
 */

const SET_MAP = "setMap";
const SET_STORE_LIST = "setStoreList";

const setMap = (map) => {
  return {
    type: SET_MAP,
    map: map
  }
};


const setStoreList = (storeList) => {
  return {
    type: SET_STORE_LIST,
    storeList: storeList
  };
};


const reducer = (state = {
  disasterMsg: {
    searchQuery: "",
    data: [],
    pageNo: 1
  },
  maskMap: {
    map: null,
    storeList: []
  }
}, action) => {
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
      break;

    case SET_MSG_SEARCHQUERY:
      return {
        ...state,
        disasterMsg: {
          ...state.disasterMsg,
          searchQuery: action.searchQuery
        }
      };
      break;
      
    case SET_MAP:
      return {
        ...state,
        maskMap: {
          ...state.maskMap,
          map: action.map
        }
      };
      break;

    case SET_STORE_LIST:
      console.log(action);
      return {
        ...state,
        maskMap: {
          ...state.maskMap,
          storeList: action.storeList
        }
      };
      break;
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  setMsgSearchQuery,
  addDisasterMsgData,
  setStoreList,
  setMap
};

export default store;