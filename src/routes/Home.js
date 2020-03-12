import React from 'react';
import { useApi } from '../modules/useApi';
import MsgContainer from "../components/MsgContainer";
import { Card } from 'antd';

const Home = () => {

  const { isLoding, data, get, pageNo } = useApi();
  
  return <div className="home" style={{marginTop:25}}>
    {isLoding ? 
    <div>
      <Card loading={true} style={{ maxWidth: 500, margin: "auto", marginBottom: 13}}/>
      <Card loading={true} style={{ maxWidth: 500, margin: "auto", marginBottom: 13}}/>
      <Card loading={true} style={{ maxWidth: 500, margin: "auto", marginBottom: 13}}/>
      <Card loading={true} style={{ maxWidth: 500, margin: "auto", marginBottom: 13}}/>
      <Card loading={true} style={{ maxWidth: 500, margin: "auto", marginBottom: 13}}/>
      <Card loading={true} style={{ maxWidth: 500, margin: "auto", marginBottom: 13}}/>
      <Card loading={true} style={{ maxWidth: 500, margin: "auto", marginBottom: 13}}/>
      <Card loading={true} style={{ maxWidth: 500, margin: "auto", marginBottom: 13}}/>
      <Card loading={true} style={{ maxWidth: 500, margin: "auto", marginBottom: 13}}/>
    </div>
    :
    <MsgContainer data={data.DisasterMsg[1].row} no={pageNo}/>  
    }
  </div>
};

export default Home;