import React from "react";
import faker from "faker";
import styled from "styled-components";

const Main = styled.div`
  border: solid 1px #80808094;
  margin-top: 30px;
  background-color: white;
  border-radius: 8px;
  position: relative;
  text-align: center;
  padding: 20px;
  width: 25%;
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
`;

const Para = styled.p`
  font-size: 12px;
  margin-top: 40px;
  opacity: 0.5;
`;
const Subtitle = styled.p`
  font-size: 12px;
  opacity: 0.6;
`;
const Button = styled.button`
  background: none;
  outline: none;
  padding: 10px;
  border: solid 1px #2276c8;
  color: #2276c8;
  border-radius: 20px;
  padding-left: 50px;
  padding-right: 50px;
`;

export default function ProfileCard() {
  return (
    <Main>
      <Img src={faker.image.image()} alt=""></Img>
      <Profileheading>{faker.name.findName()}</Profileheading>
      <Subtitle>{faker.name.jobTitle()}</Subtitle>
      <Para> mutual connection</Para>
      <Button>Connect</Button>
    </Main>
  );
}
