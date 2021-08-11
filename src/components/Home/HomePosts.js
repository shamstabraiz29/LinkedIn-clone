import React from "react";
import styled from "styled-components";
import faker from "faker";
import Comments from "./Comments"

const Main = styled.div`
  border: solid 1px #80808094;
  margin-top: 30px;
  background-color: white;
  border-radius: 8px;
  margin-left: 20px;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 15px;
  margin-top: 10px;
`;

const Details = styled.div`
  position: relative;
`;

const Subtitle = styled.p`
  font-size: 12px;
  opacity: 0.6;
  position: absolute;
  top: 20px;
  left: 72px;
`;
const Subtitle2 = styled.p`
  font-size: 10px;
  opacity: 0.8;
  position: absolute;
  top: 38px;
  left: 72px;
`;
const Icon = styled.i`
  font-size: 12px;
  position: absolute;
  top: 48px;
  left: 90px;
`;

const Profileheading = styled.h1`
  font-size: 15px;
  margin: 0;
  position: absolute;
  top: 10px;
  left: 72px;
`;

export default function HomePosts() {
  return (
    <Main>
      <Details>
        <Img src={faker.image.image()} alt=""></Img>
        <Profileheading>{faker.name.findName()}</Profileheading>
        <Subtitle>{faker.name.jobTitle()}</Subtitle>
        <Subtitle2>5d .</Subtitle2>
        <Icon className="fa fa-globe-asia"></Icon>
        <img src={faker.image.image()} alt="" style ={{width:"100%"}}></img>
        <hr></hr>
        <Comments></Comments>
      </Details>
    </Main>
  );
}
