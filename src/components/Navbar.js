import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import img1 from "../images/img1.jpg";


const Wrapper = styled.section`
  height: 50px;
  background-color: white;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 35% 45% 20%;
  a {
    text-decoration: none;
    color: black;
  }
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const Li = styled.li`
  list-style: none;
`;
const Logo = styled.i`
  font-size: 35px;
  color: #0a66c2;
`;
const Navinput = styled.input`
  margin-left: 5px;
  height: 25px;
  background-color: #eef3f8;
  border: none;
  outline: none;
  padding: 4px;
  border-radius: 5px;
`;
const Navicon = styled.i`
  font-size: 25px;
  color: gray;
`;
const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export default function Navbar() {
  const Links = [
    {
      link: "/",
      Class: "fa fa-home",
    },
    {
      link: "/MyNetwork",
      Class: "fa fa-users",
    },
    {
      link: "/Jobs",
      Class: "fas fa-suitcase",
    },
    {
      link: "/Messaging",
      Class: "fa fa-comment-dots",
    },
    {
      link: "/Notification",
      Class: "fa fa-bell",
    },
    {
      link: "/Profile",
      class: "profile",
      img: img1
    }
  ];

  return (
    <Wrapper>
      <header>
        <Grid className="nav-main" style={{ width: "85%", margin: "auto" }}>
          <div
            className="Navlogo"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <Logo className="fab fa-linkedin"></Logo>
            <Navinput placeholder="Search"></Navinput>
          </div>
          <div className="navIcons">
            <Ul>
              {Links.map((e) => (
                <Li>
                  <NavLink to={e.link}  activeClassName="active"  exact>
                    <Navicon  className={e.Class}></Navicon>
                    {e.img?<ProfileImg src={e.img} />:null}
                  </NavLink>
                </Li>
              ))}
            </Ul>
          </div>
          <div className="nav-work">
            {/* <h6>Try Premium Free  for 1 Month</h6> */}
          </div>
        </Grid>
      </header>
    </Wrapper>
  );
}