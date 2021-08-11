import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  border: solid 1px #80808094;
  margin-top: 30px;
  background-color: white;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 15px;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Li = styled.li`
  list-style: none;
  border-right: solid 1px #80808094;
`;
const A = styled.a`
  text-decoration: none;
  opacity: 0.6;
  color: black;
  padding-right: 5px;
  font-weight: 500;
`;
const Icon = styled.i`
  font-size: 18px;
  opacity: 0.6;
`;
const Edit = styled.i`
  font-size: 18px;
  margin-right: 10px;
`;
const More = styled.button`
  font-size: 18px;
  outline: none;
  border: none;
  background: none;
  font-weight: 600;
  opacity: 0.6;
  margin-left: 10px;
`;
const Post = styled.button`
  font-size: 18px;
  outline: none;
  background: none;
  font-weight: 600;
  float: right;
  border: 1px solid #0a66c2;
  color: #0a66c2;
  padding: 2px;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;

export default function JobLinks() {
  const items = [
    {
      link: "/",
      name: "My Jobs",
      class: "fa fa-bookmark",
    },
    {
      link: "/",
      name: "Job Alerts",
      class: "fa  fa-bell",
    },
    {
      link: "/",
      name: "Salary",
      class: "fa fa-credit-card",
    },
    {
      link: "/",
      name: "Interview Prep",
      class: "fa fa-file",
    },
  ];

  return (
    <div>
      <Grid>
        <Div>
          {items.map((i) => (
            <Li>
              <Icon className={i.class}></Icon>
              <A href={i.link}> {i.name}</A>
            </Li>
          ))}
        </Div>
        <div>
          <More>More</More>
          <i className="fa fa-caret-down" style={{ opacity: "0.6" }}></i>
          <Post>
            <Edit className="far fa-edit"></Edit>
            Post a free job
          </Post>
        </div>
      </Grid>
    </div>
  );
}
