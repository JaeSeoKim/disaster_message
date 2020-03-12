import React from "react";
import { Typography, Divider } from "antd";
import {GithubOutlined, IdcardOutlined} from '@ant-design/icons';
const { Title, Paragraph, Text } = Typography;

const About = () => {
  return (
    <>
      <Typography>
        <Title>재난 문자 조회 사이트</Title>
        <Title level={4}>Created by JaeSeoKim</Title>
        <a href="https://github.com/JaeSeoKim">
          <Title level={4}><GithubOutlined/> Github</Title>
        </a>
        <a href="https://jaeseokim.tistory.com/">
          <Title level={4}><IdcardOutlined/> Blog</Title>
        </a>
        <Paragraph>
          리액트 어렵다 ㅠㅠ 누가 리액트좀 알려줘~
          어려워 ㅠㅠ
        </Paragraph>
      </Typography>
    </>
  );
};

export default About;
