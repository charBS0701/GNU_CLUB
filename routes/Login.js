import React, { useState } from "react";
import { Text, Button, TextInput, AsyncStorage } from "react-native";
import styled from "styled-components/native";

const Main = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100;
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
      var dataToSend = {
        signInId: id,
        password: pw,
      };

      var formBody = [];
      for (var key in dataToSend) {
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

      const response = await fetch(`http://15.165.169.129/api/member/signIn`, {
        method: "POST",
        body: formBody,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const userData = await response.json();
      console.log("user Pk: " + JSON.stringify(userData));

      // AsyncStorage.setItem("pk", userData);
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
