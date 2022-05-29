import React, { useState } from 'react';
import {View, TextInput, Button, Image} from 'react-native';
import styled from 'styled-components/native';
import axios from "axios";
import * as ImagePicker from 'expo-image-picker';

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

const Images = styled.View`
    width: 40%;
    margin-left: 10%;
`;


const Posting = (clubPk:any) => {
    let title;
    let content;
    const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result:any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1,1],
      quality: 1,
    });
    setImage(result.uri);
    }
    const callApi = async() => {
        const frm = new FormData();
        frm.append('title',title);
        frm.append('content',content);
        try{
            const response = await axios.post(`http://15.165.169.129/api/club/${clubPk.route.params.clubPk}/bulletin_board/notice`,frm,{
                headers:{
                    'Content-Type': 'application/json'
                }});
            console.log(frm,response);
            }catch(error){
            console.log(error.response.data);
        }
    }
    const post = () => {
        callApi();
        alert("게시물이 게시되었습니다.");
        clubPk.navigation.goBack();
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
            <Images>
                <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
                <Button title='사진 불러오기' onPress={() => pickImage()}/> 
            </Images>
            <Button title='게시' onPress={() => post()} />
        </View>
    );
};

export default Posting;