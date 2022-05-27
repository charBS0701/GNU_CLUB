import React, { useEffect, useState } from 'react';
import {View,Text, Image, Button} from 'react-native';
import styled from 'styled-components/native';
import Loader from '../components/Loader';
import { Fontisto } from '@expo/vector-icons';
import { CheckedBox, UncheckedBox } from '../components/Icon';


const Container = styled.View`
    display: flex;
    flex: 1;
    align-Items: center;
    padding-top: 15%;
`;

const ClubImage = styled.Image`
    width: 90%;
    height: 35%;
`;
const Title = styled.Text`
    font-size: 30px;
    margin: 5%;
`;

const Content = styled.View`
display: flex;
flex-direction: row;
width: 100%;
padding: 3% 5% 0% 5%;
justify-content: space-between;
`;

const Posting = styled.View`
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15% 0;
`
const Club = (props) => {
    const [loading, setLoading] = useState(true);
    const [clubData, setClubData] = useState({
        data: {
            clubName: "",
            totalMemberCnt: 0,
            currentMemberCnt: 0,
        }
    });
    const clubPk = props.route.params.clubPk;
    const member_pk = 1;

    // 클럽 데이터 가져오기
    const getClubData = async () => {
        try{
            const response = await fetch(
                `http://15.165.169.129/api/club/${clubPk}?member_pk=${member_pk}`
            );
            const thisData = await response.json();
            setClubData(thisData);
        } catch (error) {
            console.log("error in get Club data: " + error);
        }
    }

    // 화면 들어올 때 실행
    useEffect(()=> {
        getClubData();
        setLoading(false);
    }, [])
    
    // 네비게이션 이동
    const nav = (page) => {
        props.navigation.navigate(page);
    }

    return  loading ? <Loader /> : (
        <Container>
            {/* 동아리 사진 삽입 */}
            {/* 더미 이미지 */}
            <ClubImage source={require("../assets/freeImages.png")} />
            <Content>
            <Title>{clubData.data.clubName}</Title>
            <View>
                <Text>동아리 총 인원 : {clubData.data.totalMemberCnt}</Text>
                <Text>동아리방 현재 인원 : {clubData.data.currentMemberCnt}</Text>
                <UncheckedBox />
            </View>
            </Content>
            <Posting>
                <Button title='공지사항' onPress={() => nav('Notice')}/>
                <Button title='타임라인' onPress={() => nav('Timeline')}/>
            </Posting>
            <Text>동아리 소개</Text>
        </Container>
    );
};

export default Club;