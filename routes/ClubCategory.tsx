import React from 'react';
import {View,Text, Button} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.ScrollView``;

const ClubCategory = ({ navigation }) => {

    return(
        <Container>
            <Text>클럽 카테고리 페이지입니다.</Text>
        </Container>
        );

};



export default ClubCategory;