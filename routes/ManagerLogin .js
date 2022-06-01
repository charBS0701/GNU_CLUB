import React, { useState } from "react";
import { Text, Button, TextInput, AsyncStorage, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

const Main = styled.View`
  flowdirection : row;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 200;
  margin-left: 50;
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
      <Text style={{fontSize: 40, marginBottom: "5%"}}>관리자 로그인</Text>
      <View style={{flexDirection:"row", marginleft : 100}}>
      <Ionicons name="person-outline" size={40} color="black" />
      <TextInput style={{marginBottom: "4%"}} placeholder="ID" fontSize={30} onChange={(text) => setId(text)} /> 
        </View>
      <View style={{flexDirection:"row"}}>
        <MaterialCommunityIcons name="key" size={40} color="black" />
      <TextInput style={{marginBottom: "4%"}} placeholder="비밀번호" fontSize={30} onChange={(text) => setPw(text)} />
      </View>

      <TouchableOpacity style={{borderRadius: 10, backgroundColor: "skyblue", width: 310, height: 50, justifyContent: "center", alignItems: "center" }}  onPress={requestLogin}>
      <Text style={{fontSize: 20, color: "white"}}>로그인</Text>
        </TouchableOpacity>

    </Main>
  );
};

export default ManagerLogin;
