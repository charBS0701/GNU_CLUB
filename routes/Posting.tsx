import React from 'react';
import {View,Text, TextInput, Button} from 'react-native';
import styled from 'styled-components/native';

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

const Posting = ({navigation}) => {
    return (
        <View>
            <Title>
                <TextInput placeholder='title' maxLength={100}/>
            </Title>
            <Detail>
                <TextInput placeholder='detail' maxLength={5000}/>
            </Detail>
                <Button title='사진 불러오기'/>
            <Button title='Post' onPress={() => navigation.goBack()} />
        </View>
    );
};

export default Posting;