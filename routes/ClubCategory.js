import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UnBookmarked, Bookmarked } from "../components/Bookmark";

const Container = styled.ScrollView`
  padding-left: 10%;
  padding-right: 10%;
`;
const CategoryNameContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CategoryName = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100;
  font-size: 30px;
  color: black;
  background-color: #9a9a9a;
  padding: 0px 10px 0px 10px;
`;

const List = styled.View`
  display: flex;
  border: 3px;
  border-color: #9a9a9a;
  max-height: 180px;
`;

const CategoryContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ced1ce;
  height: 50px;
  justify-content: center;
`;

const Category = styled.Text`
  margin-left: 10%;
  font-size: 25px;
  color: #4b4b4b;
`;

const ClubCategory = (props) => {
  const [clubList, setClubList] = useState([]);
  const categoryPk = props.route.params.categoryPk;

  let member = {
    signInId: "byeoru",
    joinedClubs: ["햇귀"],
    bookmarks: [1],
  };

  // 클럽 데이터 가져오기
  const getClubList = async () => {
    try {
      const response = await fetch(
        `http://15.165.169.129/api/category/${categoryPk}/clubs`
      );
      const json = await response.json();
      setClubList(json.data);
    } catch (error) {
      console.log("error in get club list: " + error);
    }
  };

  useEffect(() => {
    getClubList();
  }, []);

  // 즐겨찾기 여부 처리
  const checkFeather = (thisPk) => {
    var thisFeather = "";
    member.bookmarks.includes(thisPk)
      ? (thisFeather = <Bookmarked />)
      : (thisFeather = <UnBookmarked />);

    return <View>{thisFeather}</View>;
  };

  // 즐겨찾기  api
  const clickBookMark = async (club_pk) => {
    try {
      //const memberPk = await AsyncStorage.getItem("pk");
      const response = await fetch(
        `http://15.165.169.129/api/member/1/bookmark?club_pk=${club_pk}`,
        {
          method: "POST",
        }
      );
      const json = await response.json();
      console.log("추가된 북마크 pk: " + JSON.stringify(json));

      // 페이지 새로고침 추가 필요
    } catch (error) {
      console.log("error in get club list: " + error);
    }
  };

  // 네비게이션 이동
  const nav = (page, clubPk) => {
    props.navigation.navigate(page, { clubPk });
  };

  return (
    <Container>
      <CategoryNameContainer>
        <CategoryName>{props.route.params.categoryName} 분야 </CategoryName>
      </CategoryNameContainer>
      {clubList.map((club, key) => {
        return (
          <List key={key}>
            <CategoryContainer>
              <Category>
                <TouchableOpacity onPress={() => nav("Club", club.clubPk)}>
                  <Text style={{ fontSize: 24 }}>{club.clubName}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => clickBookMark(club.clubPk)}>
                  {checkFeather(club.clubPk)}
                </TouchableOpacity>
              </Category>
            </CategoryContainer>
          </List>
        );
      })}
    </Container>
  );
};

export default ClubCategory;
