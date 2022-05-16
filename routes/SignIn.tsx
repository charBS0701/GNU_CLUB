import React from 'react';
import {View,Text, TextInput, Button} from 'react-native';
import styled from 'styled-components/native';

const Main = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.View`
  margin: 5%;  
`;

const SignIn = ({navigation}) => {
    return (
        <Main>
            <Text>회원가입</Text>
                <TextInput placeholder='ID'/>
                <TextInput placeholder='비밀번호'/>
                <TextInput placeholder='비밀번호 확인'/>
                <Button title='회원가입' onPress={() => navigation.goBack()}/>
        </Main>
    );
};

export default SignIn;