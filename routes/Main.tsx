/**
 * @format
 * @flow strict-local
 */

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ranking from "./Ranking";
import MyPage from "./MyPage";
import ClubList from "./ClubList";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="동아리 리스트"
        component={ClubList}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen name="동아리 랭킹" component={Ranking} options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="chess-king" size={24} color="black" />
        ),
      }}/>
      <Tab.Screen name="마이페이지" component={MyPage} options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="account" size={24} color="black" />
        ),
      }}/>
    </Tab.Navigator>
  );
};

export default Main;
