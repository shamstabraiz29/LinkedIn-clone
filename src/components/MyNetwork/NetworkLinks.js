import React from "react";
import styled from "styled-components";

const Li = styled.li`
  list-style: none;
  margin-left: 20px;
  opacity: 0.7;
`;

const A = styled.a`
  text-decoration: none;
  color: black;
  line-height: 3;
`;
const Icon = styled.i`
  margin-right: 10px;
  font-size: 20px;
`;

export default function NetworkLinks() {
  const items = [
    {
      link: "/",
      name: "Connections",
      class: "fa fa-users",
    },
    {
      link: "/",
      name: "Teammates",
      class: "far fa-id-badge",
    },
    {
      link: "/",
      name: "Contacts",
      class: "far fa-address-book",
    },
    {
      link: "/",
      name: "People I Follow",
      class: "far fa-user-circle",
    },
    {
      link: "/",
      name: "Groups",
      class: "fa fa-user-friends",
    },
    {
      link: "/",
      name: "Events",
      class: "far fa-calendar-alt",
    },
    {
      link: "/",
      name: "Pages",
      class: "far fa-file",
    },
    {
      link: "/",
      name: "Newslatters",
      class: "far fa-newspaper",
    },
    {
      link: "/",
      name: "Hashtags",
      class: "fa fa-hashtag",
    },
  ];

  return (
    <div>
      {items.map((i) => (
        <Li>
          <Icon className={i.class}></Icon>
          <A href={i.link}>{i.name}</A>
        </Li>
      ))}
    </div>
  );
}
