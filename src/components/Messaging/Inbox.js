import React from "react";
import styled from "styled-components";

const Main = styled.div`
  border-left: solid 1px #80808094;
  overflow: hidden;
`;
const H1 = styled.h1`
  font-size: 18px;
  text-align: center;
  font-weight: 400;
`;
const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;
`;
const Div = styled.div`
  height: 55vh;
`;

export default function Inbox() {
  return (
    <Main>
      <div>
        <H1>New message</H1>
      </div>
      <hr></hr>
      <div>
        <Input placeholder="Type a name or Multiple names..."></Input>
      </div>
      <hr></hr>
      <Div></Div>
      <hr></hr>
      <Input placeholder="Write a Message"></Input>
    </Main>
  );
}
