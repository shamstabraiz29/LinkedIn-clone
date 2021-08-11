import React from "react";
import styled from "styled-components";
import HomeGroups from "./HomeGroups";
import ProfileDetails from "./ProfileDetails";

const Main = styled.div`
  border: solid 1px #80808094;
  margin-top: 30px;
  background-color: white;
  border-radius: 8px;
`;

const H2 = styled.h2`
  font-size: 15px;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 12px;
  opacity: 0.6;
  margin: 0;
`;

const ProDiv = styled.div`
  margin-bottom: 7px;
  margin-left: 10px;
  padding: 5px;
`;
const Icon = styled.i`
  display: inline-block;
  color: gray;
`;

export default function HomeProfile() {
  return (
    <>
      <Main>
        <ProfileDetails></ProfileDetails>
        <hr></hr>
        <ProDiv>
          <Subtitle>Connections</Subtitle>
          <H2>My Network</H2>
        </ProDiv>
        <hr></hr>
        <ProDiv>
          <Subtitle>Access exclusive tools & insights</Subtitle>
          <H2>Try Premium Free for 1 Month</H2>
        </ProDiv>
        <hr></hr>
        <ProDiv>
          <Icon className="fa fa-bookmark"></Icon>
          <H2 style={{ display: "inline", marginLeft: "5px" }}>My Terms </H2>
        </ProDiv>
      </Main>
      <HomeGroups></HomeGroups>
    </>
  );
}
