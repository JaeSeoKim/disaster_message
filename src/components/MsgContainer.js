import React, { useEffect, useState } from "react";
import { Card , message, Row } from "antd";
import InfinityScroll from "../modules/InfinityScroll";
import Axios from "axios";

const key = process.env.REACT_APP_API_KEY;

let isLoding = false

let pageNo = 1;

var MsgData = [];

const MsgContainer = ({data, no}) =>{

  const [flag, setFlag] = useState(Date.now());

  InfinityScroll( async () => {
    if(!isLoding){
      isLoding = true;
      await Axios.get("http://apis.data.go.kr/1741000/DisasterMsg2/getDisasterMsgList", {
        params: {
          ServiceKey: key,
          type: "json",
          numOfRows: 50,
          pageNo: pageNo+1,
          flag: "Y"
        }
      })
      .then(response => {
        if(pageNo === 1){
          MsgData = response.data.DisasterMsg[1].row;
        }else{
          MsgData = MsgData.concat(response.data.DisasterMsg[1].row);
        }
        pageNo = pageNo + 1;
        setFlag(Date.now());
        message.success({ content: "Loaded!", key:pageNo, duration: 2 });
      })
      .catch(error => {
        pageNo = pageNo + 1;
        setFlag(Date.now());
      });
      isLoding = false;
      console.log(MsgData.length);
    }
  });
  

  return <div >
    {data.map((value,index) => (
      <Card hoverable style={{ maxWidth: 500,  margin: "auto", marginBottom: 13}}
        title={value.location_name+"\t"+value.create_date} key={value.md101_sn}>
        {value.msg}
      </Card>
    ))
    }
    {flag == Date.now() ? MsgData.map((value, index) => (
      <Card hoverable style={{ maxWidth: 500,  margin: "auto", marginBottom: 13}}
      title={value.location_name+"\t"+value.create_date} key={value.md101_sn}>
      {value.msg}
    </Card>
    )) : 
    MsgData.map((value,index) => (
      <Card hoverable style={{ maxWidth: 500,  margin: "auto", marginBottom: 13}}
        title={value.location_name+"\t"+value.create_date} key={value.md101_sn}>
        {value.msg}
      </Card>
    ))
    }
    <Card loading={true} style={{ maxWidth: 500, margin: "auto", marginBottom: 13}}/>
  </div>
}

export default MsgContainer;