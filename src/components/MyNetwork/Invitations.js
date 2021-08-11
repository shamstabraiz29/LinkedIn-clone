import React from "react";
import styled from "styled-components";

const Main = styled.div`
  border: solid 1px #80808094;
  margin-top: 30px;
  background-color: white;
  border-radius: 8px;
  margin-left: 20px;
`;
const H2 = styled.h2`
  font-size: 15px;
  font-weight: 500;
  margin-left: 20px;
  margin-top: 10px;
  display: inline-block;
`;
const H3 = styled.h3`
  font-size: 15px;
  font-weight: 500;
  margin-right: 10px;
  margin-top: 10px;
  float: right;
  opacity: 0.7;
`;

export default function Invitations() {
  return (
    <Main>
      <H2>No pending invitations</H2>
      <H3>Manage</H3>
    </Main>
  );
}
