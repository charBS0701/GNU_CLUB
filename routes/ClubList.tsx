import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

const List = styled.View`
  display: flex;
  justify-content: center;
  border: 3px solid black;
  margin: 5% 10%;
  max-height: 180px;
`;

const Category = styled.Text`
  margin-left: 5%;
  font-size: 25px;

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

const ClubList = ({navigation}) => {
    return (
      <ScrollView>
        <List>
          <Category>카테고리1</Category>
          <ScrollView>
            <Inline>
              <Club onPress={() => navigation.navigate('Club')}>동아리 1</Club>
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
            <Inline>
              <Club onPress={() => navigation.navigate('Club')}>동아리 2</Club>
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
            <Inline>
              <Club onPress={() => navigation.navigate('Club')}>동아리 1</Club>
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
            <Inline>
              <Club onPress={() => navigation.navigate('Club')}>동아리 2</Club>
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
          </ScrollView>
        </List>
        <List>
          <Category>카테고리2</Category>
          <ScrollView>
            <Inline>
              <Club onPress={() => navigation.navigate('Club')}>동아리 1</Club>
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
            <Inline>
              <Club onPress={() => navigation.navigate('Club')}>동아리 2</Club>
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
            <Inline>
              <Club onPress={() => navigation.navigate('Club')}>동아리 1</Club>
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
            <Inline>
              <Club onPress={() => navigation.navigate('Club')}>동아리 2</Club>
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
          </ScrollView>
        </List>
        <List>
          <Category>카테고리3</Category>
          <ScrollView>
            <Inline>
              <Club onPress={() => navigation.navigate('Club')}>동아리 1</Club>
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
            <Inline>
              <Club onPress={() => navigation.navigate('Club')}>동아리 2</Club>
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
            <Inline>
              <Club onPress={() => navigation.navigate('Club')}>동아리 1</Club>
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
            <Inline>
              <Club onPress={() => navigation.navigate('Club')}>동아리 2</Club>
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
          </ScrollView>
        </List>
        <List>
          <Category>카테고리4</Category>
          <ScrollView>
            <Inline>
              <Club onPress={() => navigation.navigate('Club')}>동아리 1</Club>
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
            <Inline>
              <Club onPress={() => navigation.navigate('Club')}>동아리 2</Club>
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
            <Inline>
              <Club onPress={() => navigation.navigate('Club')}>동아리 1</Club>
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
            <Inline>
              <Club onPress={() => navigation.navigate('Club')}>동아리 2</Club>
              <Feather name="bookmark" size={24} color="black" />
            </Inline>
          </ScrollView>
        </List>
      </ScrollView>
      
    );
  };

  export default ClubList;