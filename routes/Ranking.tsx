import React from 'react';
import {View,Text, Button} from 'react-native';
import styled from 'styled-components/native';

const Main = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Club = styled.Text`
  font-size: 22px;
`;

const Inline = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2% 5%;
`;

const Ranking = ({navigation}) => {
    return (
        <Main>
            <Inline>
              <Text>1</Text>
              <Club onPress={() => navigation.navigate('Club')}>동아리 1</Club>
              <Text>icon</Text>
            </Inline>
            <Inline>
              <Text>2</Text>
              <Club onPress={() => navigation.navigate('Club')}>동아리 2</Club>
              <Text>icon</Text>
            </Inline>
            <Inline>
              <Text>3</Text>
              <Club onPress={() => navigation.navigate('Club')}>동아리 3</Club>
              <Text>icon</Text>
            </Inline>
            <Inline>
              <Text>4</Text>
              <Club onPress={() => navigation.navigate('Club')}>동아리 4</Club>
              <Text>icon</Text>
            </Inline>
          </Main>
    );
};

export default Ranking;