import React from "react";
import faker from "faker";
import styled from "styled-components";

const Main = styled.div`
  border: solid 1px #80808094;
  margin-top: 30px;
  background-color: white;
  border-radius: 8px;
  position: relative;
  margin-left: 20px;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 15px;
  margin-top: 10px;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 40px;
  margin-left: 5px;
  margin-right: 2px;
  outline: none;
  border: 1px solid #80808094;
`;
const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 600;
  opacity: 0.7;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width : 90%;
  margin:auto;
  padding:5px;
`;

export default function Status() {
  return (
    <Main>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Img src={faker.image.image()} alt=""></Img>
        <Input placeholder="Start a post"></Input>
      </div>
      <Div>
        <div>
          <i className="far fa-image" style={{ color: "#70b5f9" }}></i>
          <Button>Photo</Button>
        </div>
        <div>
          <i className="fab fa-youtube" style={{ color: "#7fc15e" }}></i>
          <Button>Vedio</Button>
        </div>
        <div>
          <i className="far fa-calendar-alt" style={{ color: "#eaae55" }}></i>
          <Button>Event</Button>
        </div>
        <div>
          <i className="far fa-newspaper" style={{ color: "#f4987e" }}></i>
          <Button>Write articles</Button>
        </div>
      </Div>
    </Main>
  );
}
