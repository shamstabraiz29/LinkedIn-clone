import React from "react";
import styled from "styled-components";
import faker from "faker";

const Main = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 15px;
  margin-top: 10px;
`;

const Profileheading = styled.h1`
  font-size: 15px;
  margin: 0;
  position: absolute;
  top: 15px;
  left: 74px;
`;

const Subtitle = styled.p`
  font-size: 12px;
  opacity: 0.6;
  position: absolute;
  top: 26px;
  left: 74px;
`;
const Button = styled.button`
  border-radius: 50px;
  border: solid 1px #524f4f;
  padding: 7px;
  background: none;
  opacity: 0.7;
  outline: none;
  padding-left: 20px;
  padding-right: 20px;
`;
const ButtonMain = styled.div`
  text-align: center;
`;

export default function Folllow() {
  return (
    <Main>
      <Img src={faker.image.image()} alt=""></Img>
      <Profileheading>{faker.name.findName()}</Profileheading>
      <Subtitle>{faker.name.jobTitle()}</Subtitle>
      <ButtonMain>
        <Button>
          <i style={{ marginRight: "5px" }} className="fa fa-plus"></i>
          Folllow
        </Button>
      </ButtonMain>
    </Main>
  );
}
