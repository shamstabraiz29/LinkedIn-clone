import React from "react";
import faker from "faker";
import styled from "styled-components";
import ProfileDetail from "../Home/ProfileDetails";

const Main = styled.div`
  border-left: solid 1px #80808094;
  overflow: hidden;
`;
const H1 = styled.h1`
  font-size: 18px;
  margin-left: 10px;
  font-weight: 400;
`;
const Input = styled.input`
  background: #eef3f8;
  outline: none;
  border: none;
  padding: 10px;
  margin-left: 5px;
  width: 90%;
`;
const Div = styled.div`
  height: 55vh;
`;
const Para = styled.p`
  opacity: 0.7;
  text-align: center;
`;
const Icon = styled.i`
  float: right;
  margin-right: 10px;
  margin-top: 4px;
  opacity: 0.7;
`;
const A = styled.a`
  float: right;
  margin-right: 10px;
  font-size: 20px;
  opacity: 0.7;
`;

export default function Inbox() {
  return (
    <Main>
      <div>
        <A>...</A>
        <Icon className="fa fa-edit"></Icon>

        <H1>Message</H1>
      </div>
      <hr></hr>
      <div>
        <Input placeholder="Search messages"></Input>
      </div>
      <Div>
        <ProfileDetail></ProfileDetail>
      </Div>
      <Para>Load more conversations</Para>
    </Main>
  );
}
