import React from 'react';
import {View,Text,Button, TextInput} from 'react-native';
import styled from 'styled-components/native';

const Login = ({navigation}) => {
    return (
        <View>
            <Text>로그인</Text>
            {<View>
                <TextInput placeholder='ID'/>
                <TextInput placeholder='PASSWORD'/>
                <Button title='Login' onPress={() => navigation.navigate('Main')}/>
                <Button title='SignIn' onPress={() => navigation.navigate('SignIn')}/>
            </View>}
        </View>
    );
};

export default Login;