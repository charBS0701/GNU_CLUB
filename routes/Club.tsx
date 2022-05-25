import React from 'react';
import {View,Text, Button} from 'react-native';
import styled from 'styled-components/native';
import CheckBox from '@react-native-community/checkbox';

const Main = styled.View`
    display: flex;
    align-items: center;
`;

const Title = styled.Text`
    font-size: 30px;
    margin: 10%;
`;

const Posting = styled.View`
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15% 0;
`
const Club = (props, {navigation}) => {
    return (
        <Main>
            <Title>{props.route.params.clubName}</Title>
            <View>
                <Text>동아리 총 인원 : </Text>
                <Text>동아리방 현재 인원 : </Text>
                <Text>체크박스 추가</Text>
            </View>
            <Posting>
                <Button title='공지사항' onPress={() => navigation.navigate('Notice')}/>
                <Button title='타임라인' onPress={() => navigation.navigate('Timeline')}/>
            </Posting>
            <Text>동아리 소개</Text>
        </Main>
    );
};

export default Club;