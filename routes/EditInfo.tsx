import React from 'react';
import {View,Text,Button,TextInput,Image} from 'react-native';
import styled from 'styled-components/native';

const Main = styled.View`
    display: flex;
    align-items: center;
`;

const ProfileImg = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 15% 10%;
  margin-bottom: 35%;
`;

const ChangeInfo = styled.View`
    width: 70%;
    border: 1px solid black;
`;

const EditInfo = () => {
    return (
        <Main>
            <ProfileImg>
                <Image source={{uri:''}}/>
                <Button title='프로필 사진 변경'/>
            </ProfileImg>  
            <ChangeInfo>
                <TextInput placeholder='현재 비밀번호' />
                <TextInput placeholder='새 비밀번호' />
                <TextInput placeholder='새 비밀번호 확인' />
                <Button title='수정'/>
            </ChangeInfo>
        </Main>
    );
};

export default EditInfo;