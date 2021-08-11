import React from "react";
import Navbar from "../Navbar";
import styled from "styled-components";
import ProfileCard from "../ProfileCard";
import NetworkLinks from "./NetworkLinks";
import Footer from "../Footer";
import Invitations from "./Invitations";

const Wrapper = styled.div`
  width: 85%;
  margin: auto;
  display: grid;
  grid-template-columns: 30% 70%;
`;

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
`;
const SideBar = styled.div`
  border: solid 1px #80808094;
  margin-top: 30px;
  background-color: white;
  border-radius: 8px;
  margin-left: 20px;
`;

export default function MyNetwork() {
  return (
    <>
      <Navbar></Navbar>
      <Wrapper>
        <div>
          <SideBar>
            <H2>Manage my network</H2>
            <NetworkLinks></NetworkLinks>
          </SideBar>
          <Footer></Footer>
        </div>
        <div>
          <Invitations></Invitations>
          <Main>
            <H2>Industry leaders in Pakistan you may know</H2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                padding: "20px",
              }}
            >
              <ProfileCard></ProfileCard>
              <ProfileCard></ProfileCard>
              <ProfileCard></ProfileCard>
              <ProfileCard></ProfileCard>
              <ProfileCard></ProfileCard>
              <ProfileCard></ProfileCard>
              <ProfileCard></ProfileCard>
              <ProfileCard></ProfileCard>
              <ProfileCard></ProfileCard>
              <ProfileCard></ProfileCard>
              <ProfileCard></ProfileCard>
              <ProfileCard></ProfileCard>
            </div>
          </Main>
        </div>
      </Wrapper>
    </>
  );
}
