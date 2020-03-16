/*global kakao*/
import { useSelector } from "react-redux";

const { kakao } = window;

var stores = []

var kakaoMap = {};

const useSetMarker = () => {

  const { map, storeList } = useSelector(state => ({
    map: state.maskMap.map,
    storeList: state.maskMap.storeList
  }));
  stores = storeList;
  kakaoMap = map;
  // const content = '<div>' +
  //   '<div style="width: 100%;' +
  //   'background-color: white;' +
  //   'margin-bottom: 3px;' +
  //   'padding: 5px;' +
  //   'border-radius: 5px;' +
  //   'color: #adaeb9;' +
  //   'box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),' +
  //   '  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);">' +
  //   '<h4>~약국</h4>' +
  //   '<p>주소~~~</p>' +
  //   '</div>' +
  //   '<i class="fa fa-map-marker" style="font-size:48px;color:red"></i>' +
  //   '</div>'

  // // 커스텀 오버레이를 생성합니다
  // var customOverlay = new kakao.maps.CustomOverlay({
  //   map: map,
  //   position: new kakao.maps.LatLng(lat, lng),
  //   content: content,
  //   yAnchor: 1
  // });

  const setMarker = () => {
    const positions = [];
    const imageSrc = "https://raw.githubusercontent.com/JaeSeoKim/disaster_message/master/resource/maskMapMarker/blue.png";
    stores.map(value => {
      // value.addr
      // value.created_at
      // value.stock_at
      // value.remain_stat
      // value.lat,
      // value.lng
      positions.push({
        title: value.name,
        latlng: new kakao.maps.LatLng(value.lat, value.lng)
      });
    });

    for (var i = 0; i < positions.length; i++) {
      
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(30, 35);
      // 마커 이미지를 생성합니다    
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: kakaoMap, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage // 마커 이미지 
      });

      console.log(marker);
    }

  };
  return { setMarker };
}

export default useSetMarker;