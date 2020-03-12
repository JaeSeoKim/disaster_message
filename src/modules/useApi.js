import { useState, useEffect } from "react";
import Axios from "axios";

const key = process.env.REACT_APP_API_KEY;

export const useApi = (pageNo = 1, numOfRows = 50) => {

  const [state, setState] = useState({
    isLoding: true,
    error: null,
    data: null,
    pageNo,
    numOfRows
  });

  const get = async(No = pageNo, rows = numOfRows) => {

    await Axios.get("http://apis.data.go.kr/1741000/DisasterMsg2/getDisasterMsgList", {
      params: {
        ServiceKey: key,
        type: "json",
        pageNo: No,
        numOfRows: rows,
        flag: "Y"
      }
    })
    .then(response => {  
      setState({
        ...state,
        isLoding: false,
        data : response.data
    });
    })
    .catch(error => {
      setState({
        ...state,
        isLoding: false,
        error
      });
    });
  }

  useEffect(() => { 
    get();
  },[]);

  return { ...state };
};