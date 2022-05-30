import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
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

const Notice = (clubPk) => {
    const [noticeList,setNoticeList] = useState<any>();
    const [loading,setLoading] = useState(true);
    const callApi = async() => {
        try{
            const response = await axios.get(`http://15.165.169.129/api/club/1/notices`);
            setNoticeList(response.data.data);
            setLoading(false);
        }catch(error){
            console.log(error);
        };
    }
    
    useEffect(() => {callApi()},[]);
    return (
      <View>
          {loading ? (<View>
              <ActivityIndicator size="large" />
          </View>) : (
        <Main>
            <Header>
                <GoBack onPress={() => clubPk.navigation.goBack()}>&lt;</GoBack>
                <Posting onPress={() => clubPk.navigation.navigate('Posting',{clubPk: 1})}>+</Posting>
            </Header>   
            <List>
                {noticeList.reverse().map((notice:any,index:number)=>{
                    return(
                    <Posted onPress={() => clubPk.navigation.navigate('Watch',{noticePk: notice.noticePk})} key={index}>
                        <Title>{notice.title}</Title>
                    </Posted>
                    );
                })}
            </List>
        </Main>
            ) }    
        </View>
    );
};

export default Notice;