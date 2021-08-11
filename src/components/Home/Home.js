import React from "react";
import Navbar from "../Navbar";
import styled from "styled-components";
import HomeProfile from "../Home/HomeProfile";
import HomePosts from "../Home/HomePosts";
import HomeFeed from "../Home/HomeFeed";
import Status from "../Status";
import Footer from "../Footer";

const Main = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 25%;
`;

export default function Home() {
  return (
    <section>
      <Navbar></Navbar>
      <Main className="home-main" style={{ width: "85%", margin: "auto" }}>
        <div className="home-profile">
          <HomeProfile></HomeProfile>
        </div>
        <div className="home-posts">
          <Status></Status>
          <HomePosts></HomePosts>
          <HomePosts></HomePosts>
          <HomePosts></HomePosts>
          <HomePosts></HomePosts>
          <HomePosts></HomePosts>
          <HomePosts></HomePosts>
        </div>
        <div className="home-feed">
          <HomeFeed></HomeFeed>
          <Footer></Footer>
        </div>
      </Main>
    </section>
  );
}
