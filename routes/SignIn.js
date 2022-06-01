import React, { useState } from 'react';
import {View,Text, TextInput, Button,TouchableOpacity, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

const Main = styled.View`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 200;
    margin-left: 50;
`;

const Content = styled.View`
  margin: 5%;  
`;

const SignIn = ({navigation}) => {
    const [id, setId] = useState("");
    const [pw, setpw] = useState("");
    const [pwc, setpwc] = useState("");

    const apply = async () => {
        if (id === ""){
           return alert("ID를 입력하지 않았습니다.");
        }
        if (pw === ""){
           return alert("PW를 입력하지 않았습니다.");
        }
        if (pwc === ""){
           return alert("PW확인을 입력하지 않았습니다.");
        }
        if (pw !== pwc){
            return alert("비밀번호가 일치하지 않습니다.")
        }

        try {
            const response = await fetch('http://15.165.169.129/api/member/signup', {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "signInId": id,
                    "password": pw
                })                
            })
            
            const json = await response.json();
            if(json.data === null) {
                return alert("이미 가입된 아이디 입니다.")
            } 
            navigation.navigate("Login");
            alert("회원가입이 완료되었습니다.");
        } catch (error) {
            console.log("error in apply: " + error);
        }
    }

    return (
    <Main>
        <Text style={styles.signText}>회원가입</Text>
        <View style={styles.flowDirection}>
            <Ionicons name="person-outline" size={40} color="black" />
            <TextInput style={{marginBottom: "4%"}} placeholder="ID" onChangeText={(input) => setId(input)}/>
        </View>
        <View style={styles.flowDirection}>
            <MaterialCommunityIcons name="key" size={40} color="black" />
            <TextInput style={{marginBottom: "4%"}} placeholder="비밀번호" onChangeText={(input) => setpw(input)}/>
        </View>
        <View style={styles.flowDirection}>
            <MaterialCommunityIcons name="key" size={40} color="black" />
            <TextInput style={{marginBottom: "4%"}} placeholder="비밀번호확인" onChangeText={(input) => setpwc(input)}/>
        </View>
        <TouchableOpacity style={styles.buttons} onPress={apply}>
            <Text>가입하기</Text>
        </TouchableOpacity>
    </Main>
    );
};

const styles = StyleSheet.create({
    signText: {
        fontSize: 40,
        marginBottom: "5%"
    },
    buttons: {
        borderRadius: 10, backgroundColor: "skyblue", width: 310, height: 50, justifyContent: "center", alignItems: "center" 
    },
    flowDirection: {
        flexDirection: "row"
    }
})

export default SignIn;