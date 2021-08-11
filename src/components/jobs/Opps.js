import React from "react";
import styled from "styled-components";

const Main = styled.div`
  border: solid 1px #80808094;
  margin-top: 30px;
  text-align: center;
  background-color: white;
  border-radius: 8px;
  height: 50vh;
  display: grid;
  align-items: center;
`;

const Icon = styled.i`
  font-size: 100px;
  opacity: 0.7;
`;
const H2 = styled.h2`
  font-size: 18px;
  font-weight: 500;
`;
const Para = styled.p`
  font-size: 18px;
`;
const Div = styled.div`
  width: 30%;
  margin: auto;
`;
const Button = styled.button`
  font-size: 18px;
  outline: none;
  background: none;
  font-weight: 600;
  border: 1px solid #0a66c2;
  color: #0a66c2;
  padding: 2px;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;

export default function Opps() {
  return (
    <Main>
      <Div>
        <Icon className="fas fa-suitcase"></Icon>
        <H2>Oops! Looks like we’re experiencing a problem</H2>
        <Para>
          Click here to continue searching over 20 million jobs on LinkedIn
        </Para>
        <div>
          <Button>Search Jobs</Button>
        </div>
      </Div>
    </Main>
  );
}
