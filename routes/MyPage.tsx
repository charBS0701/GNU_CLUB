import styled from "styled-components/native";
import React from 'react';
import {View,Text,Image} from 'react-native';

const Profile = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10%;
    margin: 10% 0;
`;

const Joined = styled.View`
    padding: 0 10%;
    margin: 10% 0;
`;

const Bookmark = styled.View`
    padding: 0 10%;
    margin: 10% 0;
`;

const MyPage = ({navigation}) => {
    return (
        <View>
            <Profile>
                <Image source={{uri:''}}/><Text>이름</Text><Text onPress={() => navigation.navigate('EditInfo')}>정보 수정</Text>
            </Profile>
            <Joined>
                <Text>가입한 동아리</Text>
                <View>
                    <Text>동아리 1</Text>
                    <Text>동아리 2</Text>
                </View>
            </Joined>

            <Bookmark>
                <Text>즐겨찾기</Text>
                <View>
                    <Text>동아리 1</Text>
                    <Text>동아리 2</Text>
                </View>
            </Bookmark>
        </View>
    );
};

export default MyPage;