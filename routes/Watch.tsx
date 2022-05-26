import React, { useEffect, useState } from 'react';
import {View,Text,Image, Button, TextInput} from 'react-native';
import styled from 'styled-components/native';
import axios from "axios";
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const Title = styled.Text`
    margin: 10%;
    font-size: 30px;
`;

const Time = styled.Text`
    margin-left: 5%;
`;

const Detail = styled.Text`
    margin: 5%;
`;

const Counting = styled.View`
    display: flex;
    flex-direction: row;
    padding: 5%;
`;

const AddComment = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10%;
`;
const CommentInput = styled.View`
    border: 1px black solid;
    width: 80%;
`;

const CommentList = styled.View`
    padding: 10%;
`;
const Comment = styled.View`
    border: 1px solid black;
    margin-bottom: 10%;
`;

const Like = styled.View`
    
`;

const Watch = (noticePk) => {
    const [like,setLike] = useState(false);
    const [notice,setNotice] = useState<any>();
    const callApi = async() => {
        try{
            const response = await axios.get(`http://15.165.169.129/api/club/notice/${noticePk.route.params.noticePk}?member_pk=1`);
            setNotice(response.data.data);
            setTimeout(()=>'',1000);
            console.log(notice);
            }catch(error){
                console.log(error);
            };
    }
    useEffect(() => {callApi()},[]);
    return (
        <View>
            <Title>{notice.title}</Title>
            <Time>{notice.postingTime}</Time>
            <Detail>{notice.content}</Detail>
            <Image source={{uri:`${notice.imageUrl}`}}/>
            <Counting>
                <Like onPress={() => setLike(true)}>
                    {(like) ? (
                    <AntDesign name="heart" size={24} color="black" />
                    ) : (
                    <AntDesign name="hearto" size={24} color="black" />
                    )}
                </Like>
                <Text> {notice.likeCount} </Text>
                <EvilIcons name="comment" size={24} color="black" />
                <Text> comment count </Text>
            </Counting>

            <AddComment>
                <CommentInput>
                    <TextInput maxLength={300}/>
                </CommentInput>
                <Button title='게시'/>
            </AddComment>

            <CommentList>
                <Comment>
                    <Text>id</Text>
                    <Text>detail</Text>
                </Comment>
                <Comment>
                    <Text>댓글2</Text>
                </Comment>
                <Comment>
                    <Text>댓글3</Text>
                </Comment>
            </CommentList>
        </View>
    );
};

export default Watch;