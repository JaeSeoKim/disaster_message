import React from "react";
import { NavLink } from "react-router-dom";

import { Menu, Affix } from 'antd';
import {
  InfoCircleOutlined,
  PushpinOutlined,
  NotificationOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

const Navigation = () => {

  return (
    <Affix offsetTop={20}>
      <div style={{
        width: 256,
        position: "fixed",
        display: "flex"
      }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['menu']}
          mode="inline"
          theme="white"
          inlineCollapsed={true}
        >
          <Menu.Item key="home">
            <NotificationOutlined />
            <NavLink to="/">
              <span>재난문자 목록</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="location">
            <PushpinOutlined />
            <NavLink to="/location">
              <span>지역별 재난문자</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="about">
            <InfoCircleOutlined />
            <NavLink to="/about">
              <span>About</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    </Affix>
  );
};

export default Navigation;


// backup

// <Menu.Item key="서울특별시">
//   <NavLink to="/location">서울특별시</NavLink>
// </Menu.Item>
// <Menu.Item key="부산광역시">
//   <NavLink to="/location">부산광역시</NavLink>
// </Menu.Item>
// <Menu.Item key="대구광역시">
//   <NavLink to="/location">대구광역시</NavLink>
// </Menu.Item>
// <Menu.Item key="인천광역시">
//   <NavLink to="/location">인천광역시</NavLink>
// </Menu.Item>
// <Menu.Item key="광주광역시">
//   <NavLink to="/location">광주광역시</NavLink>
// </Menu.Item>
// <Menu.Item key="대전광역시">
//   <NavLink to="/location">대전광역시</NavLink>
// </Menu.Item>
// <Menu.Item key="울산광역시">
//   <NavLink to="/location">울산광역시</NavLink>
// </Menu.Item>
// <Menu.Item key="세종특별자치시">
//   <NavLink to="/location">세종특별자치시</NavLink>
// </Menu.Item>
// <Menu.Item key="강원도">
//   <NavLink to="/location">강원도</NavLink>
// </Menu.Item>
// <Menu.Item key="경기도">
//   <NavLink to="/location">경기도</NavLink>
// </Menu.Item>
// <Menu.Item key="수원시">
//   <NavLink to="/location">수원시</NavLink>
// </Menu.Item>
// <Menu.Item key="성남시">
//   <NavLink to="/location">성남시</NavLink>
// </Menu.Item>
// <Menu.Item key="의정부시">
//   <NavLink to="/location">의정부시</NavLink>
// </Menu.Item>
// <Menu.Item key="안양시">
//   <NavLink to="/location">안양시</NavLink>
// </Menu.Item>
// <Menu.Item key="부천시">
//   <NavLink to="/location">부천시</NavLink>
// </Menu.Item>
// <Menu.Item key="광명시">
//   <NavLink to="/location">광명시</NavLink>
// </Menu.Item>
// <Menu.Item key="평택시">
//   <NavLink to="/location">평택시</NavLink>
// </Menu.Item>
// <Menu.Item key="동두천시">
//   <NavLink to="/location">동두천시</NavLink>
// </Menu.Item>
// <Menu.Item key="안산시">
//   <NavLink to="/location">안산시</NavLink>
// </Menu.Item>
// <Menu.Item key="고양시">
//   <NavLink to="/location">고양시</NavLink>
// </Menu.Item>
// <Menu.Item key="과천시">
//   <NavLink to="/location">과천시</NavLink>
// </Menu.Item>
// <Menu.Item key="구리시">
//   <NavLink to="/location">구리시</NavLink>
// </Menu.Item>
// <Menu.Item key="남양주시">
//   <NavLink to="/location">남양주시</NavLink>
// </Menu.Item>
// <Menu.Item key="오산시">
//   <NavLink to="/location">오산시</NavLink>
// </Menu.Item>
// <Menu.Item key="시흥시">
//   <NavLink to="/location">시흥시</NavLink>
// </Menu.Item>
// <Menu.Item key="군포시">
//   <NavLink to="/location">군포시</NavLink>
// </Menu.Item>
// <Menu.Item key="의왕시">
//   <NavLink to="/location">의왕시</NavLink>
// </Menu.Item>
// <Menu.Item key="하남시">
//   <NavLink to="/location">하남시</NavLink>
// </Menu.Item>
// <Menu.Item key="용인시">
//   <NavLink to="/location">용인시</NavLink>
// </Menu.Item>
// <Menu.Item key="파주시">
//   <NavLink to="/location">파주시</NavLink>
// </Menu.Item>
// <Menu.Item key="이천시">
//   <NavLink to="/location">이천시</NavLink>
// </Menu.Item>
// <Menu.Item key="안성시">
//   <NavLink to="/location">안성시</NavLink>
// </Menu.Item>
// <Menu.Item key="김포시">
//   <NavLink to="/location">김포시</NavLink>
// </Menu.Item>
// <Menu.Item key="화성시">
//   <NavLink to="/location">화성시</NavLink>
// </Menu.Item>
// <Menu.Item key="광주시">
//   <NavLink to="/location">광주시</NavLink>
// </Menu.Item>
// <Menu.Item key="양주시">
//   <NavLink to="/location">양주시</NavLink>
// </Menu.Item>
// <Menu.Item key="포천시">
//   <NavLink to="/location">포천시</NavLink>
// </Menu.Item>
// <Menu.Item key="여주시">
//   <NavLink to="/location">여주시</NavLink>
// </Menu.Item>
// <Menu.Item key="연천군">
//   <NavLink to="/location">연천군</NavLink>
// </Menu.Item>
// <Menu.Item key="가평군">
//   <NavLink to="/location">가평군</NavLink>
// </Menu.Item>
// <Menu.Item key="양평군">
//   <NavLink to="/location">양평군</NavLink>
// </Menu.Item>
// <Menu.Item key="충청북도">
//   <NavLink to="/location">충청북도</NavLink>
// </Menu.Item>
// <Menu.Item key="전라북도">
//   <NavLink to="/location">전라북도</NavLink>
// </Menu.Item>
// <Menu.Item key="전라남도">
//   <NavLink to="/location">전라남도</NavLink>
// </Menu.Item>
// <Menu.Item key="경상북도">
//   <NavLink to="/location">경상북도</NavLink>
// </Menu.Item>
// <Menu.Item key="경상남도">
//   <NavLink to="/location">경상남도</NavLink>
// </Menu.Item>
// <Menu.Item key="제주">
//   <NavLink to="/location">제주도</NavLink>
// </Menu.Item>