import { useDispatch } from "react-redux";
import Axios from "axios";
import { actionCreators } from '../store/messages';

const key = process.env.REACT_APP_API_KEY;

export const useDisasterMsgAPI = () => {

  const dispatch = useDispatch();

  const get = async (pageNo) => {

    await Axios.get("http://apis.data.go.kr/1741000/DisasterMsg2/getDisasterMsgList", {
      params: {
        ServiceKey: key,
        type: "json",
        pageNo: pageNo,
        numOfRows: 50,
        flag: "Y"
      }
    })
      .then(response => {
        dispatch(actionCreators.addData(response.data.DisasterMsg[1].row));
        dispatch(actionCreators.updatePageNo(pageNo));
      })
      .catch(error => {
        console.log(error);
      });
  }
  return { get };
};

export default useDisasterMsgAPI;