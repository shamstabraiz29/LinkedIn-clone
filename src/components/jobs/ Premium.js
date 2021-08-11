import React from "react";
import styled from "styled-components";
import faker from "faker";

const Main = styled.div`
  border: solid 1px #80808094;
  margin-top: 30px;
  background-color: white;
  border-radius: 8px;
  position: relative;
`;

const Div = styled.div`
  margin-left: 10px;
  padding: 10px;
  display: flex;
`;
const More = styled.div`
  margin-left: 15px;
`;
const Para = styled.p`
  position: absolute;
  top: 45px;
  left: 130px;
  opacity: 0.7;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 10px;
`;
const Img2 = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
const Button = styled.button`
  font-size: 18px;
  outline: none;
  background: none;
  font-weight: 500;
  border: 1px solid #0a66c2;
  color: #0a66c2;
  padding: 2px;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 80px;
  margin-bottom: 20px;
`;

export default function Premium() {
  return (
    <Main>
      <Div>
        <Img src={faker.image.image()}></Img>
        <More>
          <p>Try Premium to see jobs where you would be a top applicant</p>
          <Img2 src={faker.image.image()}></Img2>
          <Img2 src={faker.image.image()}></Img2>
          <Para>Millions of members use Premium</Para>
        </More>
      </Div>
      <Button>Try Free For 1 Month</Button>
    </Main>
  );
}
