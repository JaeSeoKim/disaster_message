# Disaster_message

> 이 프로젝트는 한국 공공데이터 포털에서 제공하는 `재난문자방송 발령현황 서비스 API` 를 이용하여 제작 하였습니다.


## ToDo

- [ ] HTTP - HTTPS MIX content 이슈와 geolocation서비스 제공을 위해 마스크와 재난 문자 프로젝트 분리 필요

### pages
 
 - [x] Home - "/"
 - [x] Location - "/location"
   - [x] 검색 창을 통해 Store 내부의 내용 필터링 하여 출력 기본 기능은 Home의 기능과 동일
 - [ ] Detail - "/detail/:id"
   - [ ] MSG 클릭시 내용을 바탕으로 구글 검색하여 크롤링 후 데이터 가공하여 제공
   - [x] 재난문자의 지역을 기반으로 마스크 구매 가능처 제공
     - [x] 간단 리스트 출력 
 - [x] About - "/about"
 - [x] MaskMap - "/maskMap"
   - [x] KakaoMap - reacte 적용 공부중...
   - [x] ~~center_changed~~ draged event listner 적용 필요

### Logic

 - [ ] Redux로 API State 개선
   - [x] Message store 개발
   - [x] useDisasterMsgAPI Redux와 연결 후 개선
   - [x] 변경된 구조를 기반으로 MsgContainer 개선
   - [ ] 
 - [ ] Detail 관련 크롤링 공부
   - [ ] 서버 필요 없이 클라이언트 단에서 해결 할 수 있도록 처리
   - [ ] 기타 아이디어 추가
 - [ ] Antd 디자인 관련 공부.....
  
 
 