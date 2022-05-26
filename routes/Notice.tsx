import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import axios from "axios";

const Main = styled.View`
    display: flex;
    align-items: center;
    height: 98%;
`;

const Header = styled.View`
    width: 75%;
    margin-top: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const List = styled.ScrollView`
    width: 100%;
    margin-left: 30%;
    display: flex;
`;

const Posted = styled.TouchableOpacity`
    width: 70%;
    height: 50px;
    margin-top: 10%;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Title = styled.Text`
    font-size: 20px;
`;

const Posting = styled.Text`
    font-size: 40px;
`;

const GoBack = styled.Text`
    font-size: 40px;
`;

const Notice = ({navigation, clubPk=1}) => {
    const [noticeList,setNoticeList] = useState<any>();
    const callApi = async() => {
        try{
            const response = await axios.get(`http://15.165.169.129/api/club/${clubPk}/notices`);
            setNoticeList(response.data.data);
            setTimeout(()=>'',1000);
        }catch(error){
            console.log(error);
        };
    }
    const nList =[{
        "imageUrl": null,
        "noticePk": 1,
        "title": "햇귀 1 공지사항",
      },{
        "imageUrl": null,
        "noticePk": 1,
        "title": "햇귀 2 공지사항",
      },{
        "imageUrl": null,
        "noticePk": 1,
        "title": "햇귀 3 공지사항",
      },{
        "imageUrl": null,
        "noticePk": 1,
        "title": "햇귀 4 공지사항",
      },{
        "imageUrl": null,
        "noticePk": 1,
        "title": "햇귀 5 공지사항",
      },{
        "imageUrl": null,
        "noticePk": 1,
        "title": "햇귀 6 공지사항",
      },{
        "imageUrl": null,
        "noticePk": 1,
        "title": "햇귀 7 공지사항",
      },{
        "imageUrl": null,
        "noticePk": 1,
        "title": "햇귀 8 공지사항",
      },{
        "imageUrl": null,
        "noticePk": 1,
        "title": "햇귀 9 공지사항",
      },{
        "imageUrl": null,
        "noticePk": 1,
        "title": "햇귀 10 공지사항",
      },{
        "imageUrl": null,
        "noticePk": 1,
        "title": "햇귀 11 공지사항",
      },{
        "imageUrl": null,
        "noticePk": 1,
        "title": "햇귀 12 공지사항",
      },{
        "imageUrl": null,
        "noticePk": 1,
        "title": "햇귀 13 공지사항",
      },{
        "imageUrl": null,
        "noticePk": 1,
        "title": "햇귀 14 공지사항",
      },];

    useEffect(() => {callApi()},[]);
    return (
        <Main>
            <Header>
                <GoBack onPress={() => navigation.goBack()}>&lt;</GoBack>
                <Posting onPress={() => navigation.navigate('Posting',{clubPk: clubPk})}>+</Posting>
            </Header>   
            <List>
                {nList.reverse().map((notice:any,index:number)=>{
                    return(
                    <Posted onPress={() => navigation.navigate('Watch',{noticePk: notice.noticePk})} key={index}>
                        <Title>{notice.title}</Title>
                    </Posted>
                    );
                })}
            </List>
        </Main>
    );
};

export default Notice;