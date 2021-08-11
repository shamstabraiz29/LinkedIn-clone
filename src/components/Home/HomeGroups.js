import React from "react";
import styled from "styled-components";

const Main = styled.div`
  border: solid 1px #80808094;
  margin-top: 30px;
  background-color: white;
  border-radius: 8px;
  a {
    display: block;
    text-decoration: none;
    padding: 5px;
    color: #0d68c2;
  }
  li {
    list-style: none;
  }
  h4 {
    text-align: center;
    font-size: 15px;
  }
`;

export default function HomeGroups() {
  return (
    <Main>
      <ul>
        <li>
          <a href="/"> Groups</a>
        </li>
        <li>
          <a href="/"> Events</a>
        </li>
        <li>
          <a href="/"> Followed Hashtags</a>
        </li>
      </ul>
      <hr></hr>
      <h4>Discovered More</h4>
    </Main>
  );
}
