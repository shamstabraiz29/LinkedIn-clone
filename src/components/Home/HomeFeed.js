import React from "react";
import styled from "styled-components";
import Folllow from "./Folllow";

const Main = styled.div`
  border: solid 1px #80808094;
  margin-top: 30px;
  background-color: white;
  border-radius: 8px;
  position: relative;
  margin-left: 20px;
`;
const H2 = styled.h2`
  font-size: 15px;
  margin-left: 15px;
`;

const InfoIcon = styled.i`
  position: absolute;
  top: 20px;
  right: 16px;
  font-size: 12px;
`;
const Para = styled.p`
  font-size: 15px;
  margin-left: 12px;
  opacity: 0.7;
  font-weight: 600;
`;

const Div = styled.div`
  position: relative;
`;
const Arrow = styled.i`
  position: absolute;
  top: 2px;
  right: 44px;
  opacity: 0.7;
`;

export default function HomeFeed() {
  return (
    <Main>
      <H2>Add to your feed</H2>
      <InfoIcon className="fa fa-info"></InfoIcon>
      <Folllow></Folllow>
      <Folllow></Folllow>
      <Folllow></Folllow>
      <Div>
        <Para>View all recommendations</Para>
        <Arrow className="fa fa-arrow-right"></Arrow>
      </Div>
    </Main>
  );
}
