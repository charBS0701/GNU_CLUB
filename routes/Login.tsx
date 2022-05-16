import React from 'react';
import {View,Text,Button, TextInput} from 'react-native';
import styled from 'styled-components/native';

const Main = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Login = ({navigation}) => {
    return (
        <Main>
            <Text>로그인</Text>
                <TextInput placeholder='ID'/>
                <TextInput placeholder='비밀번호'/>
                <Button title='로그인' onPress={() => navigation.navigate('Main')}/>
                <Button title='회원가입' onPress={() => navigation.navigate('SignIn')}/>
        </Main>
    );
};

export default Login;