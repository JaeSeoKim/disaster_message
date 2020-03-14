import React, { useState, useEffect } from "react";
import { Card, message } from "antd";
import InfinityScroll from "../action/InfinityScroll";
import useDisasterMsgAPI from '../action/useDisasterMsgAPI'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const key = process.env.REACT_APP_API_KEY;

let isLoding = false

const MsgContainer = ({ data, pageNo }) => {

  const { get } = useDisasterMsgAPI();

  InfinityScroll(() => {
    if (!isLoding) {
      isLoding = true;
      get(pageNo + 1);
      isLoding = false;
      message.success({ content: "Loaded!", key: pageNo + 1, duration: 2 });
    }
  });

  useEffect(() => {
    get(pageNo);
  }, [])

  return <div >
    {data.map((value, index) => (
      <Link to={{
        pathname: `/detail/${value.md101_sn}`,
        state: {
          location: value.location_name,
          date: value.create_date,
          msg: value.msg,
          id: value.md101_sn
        }
      }} key={index} >
        <Card hoverable style={{ maxWidth: 500, margin: "auto", marginBottom: 13 }}
          title={value.location_name + "\t" + value.create_date} >
          {value.msg}
        </Card>
      </Link>
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