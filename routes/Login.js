import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

const Main = styled.View`
  display: flex;
  align-items: flex-start;
  margin-top: 45%;
  margin-left: 25px;
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
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "signInId": id,
        "password": pw
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      const response = await fetch('http://15.165.169.129/api/member/signIn', requestOptions);
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
      <Text style={{fontSize: 40, marginBottom: "5%"}}>로그인</Text>
      <View style={{flexDirection:"row", marginleft : 100}}>
      <Ionicons name="person-outline" size={40} color="black" />
      <TextInput style={{marginBottom: "4%"}} placeholder="ID" fontSize={30} onChangeText={(text) => setId(text)} /> 
        </View>
      <View style={{flexDirection:"row"}}>
        <MaterialCommunityIcons name="key" size={40} color="black" />
      <TextInput style={{marginBottom: "4%"}} placeholder="비밀번호" fontSize={30} onChangeText={(text) => setPw(text)} />
      </View>

      <TouchableOpacity style={{borderRadius: 10, backgroundColor: "skyblue", width: 310, height: 50, justifyContent: "center", alignItems: "center" }}  onPress={requestLogin}>
        <Text style={{fontSize: 20, color: "white"}}>로그인</Text>
        </TouchableOpacity>
      <TouchableOpacity style={{width: 310, height: 50, justifyContent: "center", alignItems: "center", marginBottom: "100%"}}  onPress={() => navigation.navigate("SignIn")}>
        <Text style={{fontSize: 20}}>회원가입</Text>
        </TouchableOpacity>
      <TouchableOpacity style={{width: 310, height: 50, justifyContent: "flex-end", alignItems: "center" }}  onPress={() => navigation.navigate("ManagerLogin")}>
        <Text style={{fontSize: 15}}>관리자로그인</Text>
        </TouchableOpacity>
    </Main>
  );
};

export default Login;
