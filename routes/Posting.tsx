import React, { useState } from 'react';
import {View, TextInput, Button, Image} from 'react-native';
import styled from 'styled-components/native';
import axios from "axios";
import * as ImagePicker from 'expo-image-picker';
import FormData from 'form-data';

const Title = styled.View`
    display: flex;
    border: 1px solid black;
    margin: 0 10%;
    margin-top: 15%;
    padding: 0 5%;
`;

const Detail = styled.View`
    height: 30%;
    display: flex;
    border: 1px solid black;
    margin: 10%;
    padding: 0 5%;
`;

const Images = styled.View`
    width: 40%;
    margin-left: 10%;
    margin-bottom: 10%;
`;

const PostButton = styled.View`
    display: flex;
    align-items: flex-end;
    padding: 10%;
`;

const Posting = (clubPk:any) => {
    let title;
    let content;
    const [image, setImage] = useState();

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
        try{
            const formData = new FormData();
            formData.append('image',null);
            formData.append('dto', {'string': JSON.stringify({title, content}), type: 'application/json'});
            await axios({
                method: 'post',
                url: `http://15.165.169.129/api/club/${clubPk.route.params.clubPk}/bulletin_board/notice`,
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': '*/*'
                }
            });
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
                multiline={true}
                onChangeText={(event) => {
                    content = event;
                }}/>
            </Detail>
            <Images>
                <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
                <Button title='사진 불러오기' onPress={() => pickImage()}/> 
            </Images>
            <PostButton>
                <Button title='게시' onPress={() => post()} />
            </PostButton>
        </View>
    );
};

export default Posting;