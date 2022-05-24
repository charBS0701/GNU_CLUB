import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

const Container = styled.ScrollView``;

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


const ClubList = ({ navigation }) => {
  const [categoryList, setCategoryList] = useState([]);
  const getCategoryList = async () => {
    const response = await fetch(`http://15.165.169.129/api/categories`);
    const json = await response.json();
    setCategoryList(json.data);
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <Container>
      {categoryList.map((category) => (
        <List>
          <Category>{category.categoryName}</Category>
        </List>
      ))}
    </Container>
  );
};

export default ClubList;
