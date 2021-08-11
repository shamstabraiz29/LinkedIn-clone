import React from "react";
import styled from "styled-components";

const Main = styled.div`
  margin-top: 30px;
  margin-left: 20px;
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  a {
    text-decoration: none;
    color: #6b7b89;
    font-size: 12px;
  }
`;
const Li = styled.li`
  list-style: none;
  line-height: 2;
`;
const Para = styled.p`
  text-align: center;
  font-size: 12px;
  opacity: 0.8;
`;
const Icon = styled.i`
  position: absolute;
  top: 0;
  left: 35px;
  color: #0a66c2;
`;

export default function Footer() {
  let lists = [
    {
      link: "/",
      name: "About",
    },
    {
      link: "/",
      name: "Accessibility ",
    },
    {
      link: "/",
      name: "Help Center",
    },
    {
      link: "/",
      name: "Accessibility ",
    },
    {
      link: "/",
      name: "Privacy & Terms ",
    },
    {
      link: "/",
      name: "Ad Choices",
    },
    {
      link: "/",
      name: "Business Service",
    },
    {
      link: "/",
      name: "Get the LinkedIn app",
    },
    {
      link: "/",
      name: "More",
    },
  ];

  return (
    <Main>    
      <div>
        <Ul>
          {lists.map((e) => (
            <Li>
              {" "}
              <a href={e.link}>{e.name}</a>
            </Li>
          ))}
        </Ul>
        <div style = {{position:"relative"}}>
          <Icon className ="fab fa-linkedin"></Icon>
          <Para>LinkedIn Corporation © 2021</Para>
        </div>
      </div>
    </Main>
  );
}
