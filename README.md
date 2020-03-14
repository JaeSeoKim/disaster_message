# Disaster_message

> 이 프로젝트는 한국 공공데이터 포털에서 제공하는 `재난문자방송 발령현황 서비스 API` 를 이용하여 제작 하였습니다.


## ToDo

### pages
 
 - [x] Home - "/"
 - [ ] Location - "/location"
 - [ ] Detail - "/detail/:id"
   - [ ] MSG 클릭시 내용을 바탕으로 구글 검색하여 크롤링 후 데이터 가공하여 제공
   - [ ] 재난문자의 지역을 기반으로 마스크 구매 가능처 제공
     - [x] 간단 리스트 출력
     - [ ] 
 - [x] About -
 - [ ]  "/about"

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
  
 
 