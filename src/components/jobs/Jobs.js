import React from "react";
import Navbar from "../Navbar";
import styled from "styled-components";
import JobLinks from "./JobLinks";
import Searchjob from "./Searchjob";
import Premium from "./ Premium";
import Opps from "./Opps";

const Main = styled.div`
  width: 85%;
  margin: auto;
`;

export default function Home() {
  return (
    <section>
      <Navbar></Navbar>
      <Main>
        <JobLinks></JobLinks>
        <Searchjob></Searchjob>
        <Premium></Premium>
        <Opps></Opps>
      </Main>
    </section>
  );
}
