import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UnBookmarked, Bookmarked } from "../components/Bookmark";

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
      : (thisFeather = (
          <UnBookmarked />
        ));

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
      <TextLine>{props.route.params.categoryName} 분야 </TextLine>
      {clubList.map((club, key) => {
        return (
          <List key={key}>
            <Category>
              <TouchableOpacity onPress={() => nav("Club", club.clubPk)}>
                <Text style={{ fontSize: 24 }}>{club.clubName}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => clickBookMark(club.clubPk)}>
                {checkFeather(club.clubPk)}
              </TouchableOpacity>
            </Category>
          </List>
        );
      })}
    </Container>
  );
};

export default ClubCategory;
