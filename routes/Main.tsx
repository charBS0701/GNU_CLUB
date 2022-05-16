/**
 * @format
 * @flow strict-local
 */
 
 import React from 'react';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import Ranking from './Ranking';
 import MyPage from './MyPage';
 import ClubList from './ClubList';
 
 const Tab = createBottomTabNavigator();
 
 const Main = () => {
   return (
       <Tab.Navigator>
         <Tab.Screen name="ClubList" component={ClubList} />
         <Tab.Screen name="Ranking" component={Ranking} />
         <Tab.Screen name="MyPage" component={MyPage} />
       </Tab.Navigator>
   );
 };
 
 export default Main;
 