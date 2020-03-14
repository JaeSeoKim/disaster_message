import React, { useState, useEffect } from "react";
import { Card, message } from "antd";
import InfinityScroll from "../action/InfinityScroll";
import useDisasterMsgAPI from '../action/useDisasterMsgAPI'
import { connect, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const key = process.env.REACT_APP_API_KEY;

let isLoding = false
let no;

const MsgContainer = ({ data, pageNo }) => {
  no = pageNo;
  console.log("container out : ", pageNo);
  const { get } = useDisasterMsgAPI(pageNo);

  InfinityScroll(async () => {
    if (!isLoding) {
      isLoding = true;
      await get(no);
      isLoding = false;
      message.success({ content: "Loaded!", key: no, duration: 2 });
    }
  });

  useEffect(() => {
    get(pageNo);
  }, [])

  return <div >
    {data.map((value, index) => (
      <div style={{ margin: "auto", maxWidth: 550 }} key={index} >
        <Link to={{
          pathname: `/detail/${value.md101_sn}`,
          state: {
            location: value.location_name,
            date: value.create_date,
            msg: value.msg,
            id: value.md101_sn
          }
        }} >
          <Card hoverable style={{ maxWidth: 500, margin: "auto", marginBottom: 13 }}
            title={value.location_name + "\t" + value.create_date} >
            {value.msg}
          </Card>
        </Link>
      </div>
    ))
    }
    <Card loading={true} style={{ maxWidth: 500, margin: "auto", marginBottom: 13 }} />
  </div>
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    pageNo: state.pageNo
  };
}

export default connect(mapStateToProps)(MsgContainer);