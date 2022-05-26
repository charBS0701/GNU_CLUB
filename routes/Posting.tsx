import React, { useState } from 'react';
import {View, TextInput, Button} from 'react-native';
import styled from 'styled-components/native';
import axios from "axios";

const Title = styled.View`
    display: flex;
    border: 1px solid black;
    margin: 0 10%;
    margin-top: 15%;
    padding-left: 5%;
`;

const Detail = styled.View`
    height: 30%;
    display: flex;
    border: 1px solid black;
    margin: 10%;
    padding-left: 5%;
`;



const Posting = ({navigation}, clubPk:number) => {
    let title:String;
    let content:String;
    const callApi = async() => {
        try{
            await axios.post(`http://15.165.169.129/api/club/${clubPk}/bulletin_board/notice`,{
                notice:{
                    title: title,
                    content: content,
                },
                image:{
                    src:'',
                }
        });}catch(error){
            console.log(error);
        }
    }
    const post = () => {
        callApi();
        alert("게시물이 게시되었습니다.");
        navigation.goBack();
    }
    return (
        <View>
            <Title>
                <TextInput 
                placeholder='title' 
                maxLength={100} 
                onChangeText={(event) => {
                    title = event;
                }}/>
            </Title>
            <Detail>
                <TextInput 
                placeholder='detail' 
                maxLength={5000}
                onChangeText={(event) => {
                    content = event;
                }}/>
            </Detail>
                <Button title='사진 불러오기' onPress={() => 1}/>
            <Button title='게시' onPress={() => post()} />
        </View>
    );
};

export default Posting;