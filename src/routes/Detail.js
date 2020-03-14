import React, { useEffect, useState } from "react";
import { Card, Collapse, } from "antd";
import Error_page from "./Error_page";
import useMaskdata from "../action/useMaskData";

const { Panel } = Collapse;

const Detail = (props) => {

  const {
    address,
    count,
    stores,
    getMaskData
  } = useMaskdata();
  useEffect(() => {
    if (props.location.state === undefined) {
      props.history.push('/');
    } else {
      getMaskData(props.location.state.location);
    }
  }, []);

  const data = props.location.state;

  return <div>
    {data === undefined ? <Error_page />
      :
      <div>
        <h1>개발중..........</h1>
        <h1>{address}</h1>
        <Card style={{ maxWidth: 500, margin: "auto", marginBottom: 13 }}
          title={data.location + "\t" + data.date} >
          {data.msg}
        </Card>
        {console.log(stores)}
        {count === 0 ?
          <div className="more_Info" />
          :
          <div className="more_Info">
            <Collapse style={{ maxWidth: 500, margin: "auto", marginBottom: 13 }}>
              <Panel header={address + "의 현재 구매 가능한 마스크 판매처"} key="maskMap">
                {stores.map((value, index) => (
                  value.created_at !== null && value.remain_stat !== "break" && value.remain_stat !== "empty" ?
                    <a href={"https://map.kakao.com/link/to/" + value.name + "," + value.lat + "," + value.lng} target="_blank" key={value.code}>
                      <Card style={{ maxWidth: 500, margin: "auto", marginBottom: 13 }}
                        title={value.name} >
                        <div style={{ textAlign: "left" }}>
                          <p>주소 : {value.addr}</p>
                          <p>Last Update : {value.created_at}</p>
                          <p>입고 시간 : {value.stock_at}</p>
                          <p>상태 :  {value.remain_stat}</p>
                        </div>
                      </Card>
                    </a>
                    : null
                ))}
              </Panel>
            </Collapse>
          </div>
        }
      </div>
    }
  </div>
};

export default Detail;


