import React from 'react';
import {View,Text,Image, Button} from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const Title = styled.Text`
    margin: 5%;
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
`
const Watch = () => {
    return (
        <View>
            <Title>Title</Title>
            <Time>2022-00-00 00:00</Time>
            <Detail>asdfasdf</Detail>
            <Image source={{uri:''}}/>
            <Counting>
                <AntDesign name="hearto" size={24} color="black" />
                <Text> like count </Text>
                <EvilIcons name="comment" size={24} color="black" />
                <Text> comment count </Text>
            </Counting>
        </View>
    );
};

export default Watch;