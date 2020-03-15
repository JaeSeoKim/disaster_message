import React, { useEffect } from 'react';
import MsgContainer from "../components/MsgContainer";
import { useDispatch } from 'react-redux';
import { actionCreators } from '../store/messages';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actionCreators.searchQuery(""));
  },[])

  return <div className="home" style={{ marginTop: 25 }}>
    <MsgContainer />
  </div>
};

export default Home;