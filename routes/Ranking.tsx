import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

const Main = styled.View`
  display: flex;
  justify-content: center;
  padding: 0 10%;
`;

const RankingCategory = styled.Text`
  font-size: 30px;
  margin-top: 10%;
  margin-bottom: 3%;
  padding: 0 3%;
`;
const RankingContainer = styled.View`
  flex-direction: column;
`;

const RankingRank = styled.View``;

const RankingRankText = styled.Text``;

const RankingClub = styled.View``;

const RankingClubText = styled.Text``;


const Ranking = ({ navigation }) => {
  const [rankingTotal, setRankingTotal] = useState([]);

  // 전체 랭킹 데이터 가져오기
  const getRankingTotal = async () => {
    try {
      const response = await fetch(
        `http://15.165.169.129/api/clubs/ranking/total`
      );
      const json = await response.json();
      setRankingTotal(json.data);
      console.log(json);
    } catch (error) {
      console.log("error in get ranking total " + error);
    }
  };

  useEffect(() => {
    getRankingTotal();
  }, []);
  return (
    <Main>
      <RankingCategory>랭킹</RankingCategory>
      <RankingContainer>
        {rankingTotal.map((club) => (
          <RankingRank>
            <RankingRankText>1</RankingRankText>
            <RankingClub>
              <RankingClubText>{club.clubName}</RankingClubText>
            </RankingClub>
          </RankingRank>
        ))}

        {/* <Inline>
          <Text>1</Text>
          <Club onPress={() => navigation.navigate("Club")}>동아리 1</Club>
          <Feather name="bookmark" size={24} color="black" />
        </Inline> */}

      </RankingContainer>
      <RankingCategory>이번 주 HOT 동아리</RankingCategory>
    </Main>
  );
};

export default Ranking;
