import React from 'react';
import {View,Text, Button} from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

const Main = styled.View`
    display: flex;
    justify-content: center;
    padding: 10% 5%;
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
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
            <Inline>
              <Text>2</Text>
              <Club onPress={() => navigation.navigate('Club')}>동아리 2</Club>
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
            <Inline>
              <Text>3</Text>
              <Club onPress={() => navigation.navigate('Club')}>동아리 3</Club>
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
            <Inline>
              <Text>4</Text>
              <Club onPress={() => navigation.navigate('Club')}>동아리 4</Club>
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
          </Main>
    );
};

export default Ranking;