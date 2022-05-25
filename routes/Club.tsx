import React, { useEffect, useState } from 'react';
import {View,Text, Button} from 'react-native';
import styled from 'styled-components/native';
import Loader from '../components/Loader';

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
        <View style={{display: "flex", alignItems: "center"}}>
            <Title>{clubData.data.clubName}</Title>
            <View>
                <Text>동아리 총 인원 : {clubData.data.totalMemberCnt}</Text>
                <Text>동아리방 현재 인원 : {clubData.data.currentMemberCnt}</Text>
                <Text>체크박스 추가</Text>
            </View>
            <Posting>
                <Button title='공지사항' onPress={() => nav('Notice')}/>
                <Button title='타임라인' onPress={() => nav('Timeline')}/>
            </Posting>
            <Text>동아리 소개</Text>
        </View>
    );
};

export default Club;