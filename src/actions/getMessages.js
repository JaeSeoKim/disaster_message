import axios from "axios";

// 재난문자방송 발령현황 서비스 API KEY
const key = process.env.REACT_APP_API_KEY;

const getMessages = async (pageNo = 1, numOfRows = 50) => {
  await axios
    .get("http://apis.data.go.kr/1741000/DisasterMsg2", {
      params: {
        method: "get",
        data: {
          ServiceKey: key,
          key: "json",
          pageNo: pageNo,
          numOfRows: numOfRows
        }
      }
    })
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

export default getMessages;
