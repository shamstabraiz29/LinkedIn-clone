import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  display: inline-block;
  margin-left: 10px;
  font-size: 16px;
  opacity: 0.7;
`;
const Icon = styled.i`
  font-size: 16px;
  margin-left: 10px;
  opacity: 0.7;
`;

export default function Comments() {
  return (
    <div className="Comments-div">
      <Icon className="far fa-thumbs-up"></Icon>
      <H2>Like</H2>
      <Icon className="far fa-comment"></Icon>
      <H2>Comments</H2>
      <Icon className="fa fa-share"></Icon>
      <H2>Share</H2>
      <Icon className="fab fa-telegram-plane"></Icon>
      <H2>Send</H2>
    </div>
  );
}
