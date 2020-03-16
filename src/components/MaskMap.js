/*global kakao*/
import React, { useEffect, useState, useRef } from "react";
import useMaskData from "../action/useMaskData";
import KaKaoMap from "./kakaoMap/KakaoMap";
import { useSelector } from "react-redux";
import useGeolocation from "../action/kakaomap/useGeolocation";
import useSetMarker from "../action/kakaomap/useSetMarker";
import useCenterChanged from "../action/kakaomap/useCenterChanged";

const { kakao } = window;

const MaskMap = () => {

  const { stores, getMaskDataGeo } = useMaskData();
  const { setMarker } = useSetMarker();
  const { getGeo } = useGeolocation();
  const {setEvent} = useCenterChanged();
  useEffect(() => {
    getMaskDataGeo(37.4388, 127.1396, 10000).then(()=>{
      getGeo();
      setMarker();
      setEvent();
    });
  }, []);
  return <div style={{ height: 500 }}>
    <h1>아직 구현 중입니다. ㅠㅠㅠ</h1>
    <KaKaoMap>
    </KaKaoMap>
  </div>
}

export default MaskMap;