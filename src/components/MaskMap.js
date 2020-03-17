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
  const { setEvent } = useCenterChanged();

  useEffect(() => {
    getMaskDataGeo(37.4388, 127.1396, 10000).then(() => {
      getGeo();
      setMarker();
      setEvent();
    });
  }, []);
  return <div>
    <div>
      <h3>공적 마스크 지도 입니다.</h3>
      <h4>해당 마커을 클릭 하시면 자세한 정보를 확인 할 수 있습니다.</h4>
    </div>
    <div style={{ height: "80vh", padding: "10px" }}>
      <KaKaoMap >
      </KaKaoMap>
    </div>
  </div>
}

export default MaskMap;