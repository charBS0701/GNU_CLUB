import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Text, Button, TextInput } from "react-native";
import styled from "styled-components/native";

const Main = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const Login = ({ navigation }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // 네비게이션 함수
  const nav = (page) => {
    navigation.replace(page);
  };

  // 로그인 버튼 실행 함수
  const requestLogin = async () => {
    try {
      const response = await fetch(`http://15.165.169.129/api/member/signIn`, {
        method: "POST",
        body: JSON.stringify({
          signInId: "byeoru",
          password: "1234",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const userData = await response.json();
      console.log("user Pk: " + JSON.stringify(userData));

      AsyncStorage.setItem("pk", userData.data.toString());
      nav(`Main`);
    } catch (error) {
      console.log("error in request login: " + error);
    }
  };

  return (
    <Main>
      <Text>로그인</Text>
      <TextInput placeholder="ID" onChange={(text) => setId(text)} />
      <TextInput placeholder="비밀번호" onChange={(text) => setPw(text)} />
      <Button title="로그인" onPress={requestLogin} />
      <Button title="회원가입" onPress={() => navigation.replace("SignIn")} />
    </Main>
  );
};

export default Login;
