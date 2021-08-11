import React from "react";
import faker from "faker";
import styled from "styled-components";

const ProfileImg = styled.div`
  text-align: center;
  margin-top: 10px;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;
const Subtitle = styled.p`
  font-size: 12px;
  opacity: 0.6;
`;

const Profileheading = styled.h1`
  font-size: 18px;
  margin: 0%;
`;

export default function ProfileDetails() {
  return (
    <div>
      <ProfileImg>
        <img src={faker.image.image()} alt=""></img>
        <Profileheading>{faker.name.findName()}</Profileheading>
        <Subtitle>{faker.name.jobTitle()}</Subtitle>
      </ProfileImg>
    </div>
  );
}
