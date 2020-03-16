/*global kakao*/
import { useSelector } from "react-redux";
import useMaskData from "../useMaskData";
import useSetMarker from "./useSetMarker";

const { kakao } = window;

var kakaoMap = {};

const useCenterChanged = () => {
  const { map, storeList } = useSelector(state => ({
    map: state.maskMap.map
  }));

  const { getMaskDataGeo } = useMaskData();

  const { setMarker } = useSetMarker();

  kakaoMap = map;

  const setEvent = () => {
    kakao.maps.event.addListener(kakaoMap, 'dragend', () => {

      // 지도의  레벨을 얻어옵니다
      var level = kakaoMap.getLevel();

      // 지도의 중심좌표를 얻어옵니다 
      var latlng = kakaoMap.getCenter();

      getMaskDataGeo(latlng.getLat(), latlng.getLng(), 1000);

      console.log(latlng.getLat(), latlng.getLng());

      setMarker();

    });
  };

  return { setEvent };

}

export default useCenterChanged;