import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";
import ClubList from "./ClubList";

const Container = styled.ScrollView``;
const TextLine = styled.Text`
  margin-top: 100;
  margin-left: 50;
  font-size: 20px;
  justify-content: center;
  align-items: center;
`;

const List = styled.View`
  display: flex;
  justify-content: center;
  border: 3px solid black;
  margin: 5% 10%;
  max-height: 180px;
`;

const Category = styled.Text`
  margin-left: 5%;
  font-size: 25px;
`;

const ClubCategory = (props) => {
  const [clubList, setClubList] = useState([]);
  const categoryPk = props.route.params.categoryPk;
  const getClubList = async () => {
    const response = await fetch(
      `http://15.165.169.129/api/category/${categoryPk}/clubs`
    );
    const json = await response.json();
    setClubList(json.data);
  };

  useEffect(() => {
    getClubList();
  });

  return (
    <Container>
      <TextLine>{props.route.params.categoryName} 분야 </TextLine>
      {clubList.map((club) => (
        <List>
          <Category>{club.clubName}</Category>
        </List>
      ))}
    </Container>
  );
};

export default ClubCategory;
