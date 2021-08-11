import React from "react";
import styled from "styled-components";

const Main = styled.div`
  background: #dce6f1;
  margin-top: 20px;
`;

const H2 = styled.h2`
  font-size: 18px;
  font-weight: 200;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;
const Heading = styled.div`
  text-align: center;
  padding-top: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  width: 40%;
`;
const Button = styled.button`
  background: #0a66c2;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 15px;
`;

export default function Searchjob() {
  return (
    <Main>
      <Heading>
        <H2>Search for your next job</H2>
      </Heading>
      <Div>
        <Input placeholder="Search by title, Skill, or company"></Input>
        <Input placeholder="Search by title, Skill, or company"></Input>
        <Button>Search</Button>
      </Div>
    </Main>
  );
}
