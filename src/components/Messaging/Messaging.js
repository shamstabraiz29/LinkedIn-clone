import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import Inbox from "./Inbox";
import SendMsg from "./SendMsg";
import Footer from "../Footer"
import faker from "faker";

const Main = styled.div`
  width: 85%;
  margin: auto;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
`;
const NestedGrid = styled.div`
  border: solid 1px #80808094;
  margin-top: 30px;
  background-color: white;
  border-radius: 8px;
  margin-left: 20px;
  display: grid;
  grid-template-columns: 40% 60%;
`;
const Siderbar = styled.div`
  margin-left: 20px;
  margin-top: 30px;
`;
const Img = styled.img`
width:100%;
`;

export default function Messaging() {
  return (
    <selection>
      <Navbar></Navbar>
      <Main>
        <Grid>
          <NestedGrid>
            <SendMsg></SendMsg>
            <Inbox></Inbox>
          </NestedGrid>
          <Siderbar>
                <Img src={faker.image.image()}></Img>
              <Footer></Footer>
          </Siderbar>
        </Grid>
      </Main>
    </selection>
  );
}
