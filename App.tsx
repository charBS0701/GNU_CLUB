/**
 * @format
 * @flow strict-local
 */
 import styled from "styled-components/native";
 import React from 'react';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { NavigationContainer } from '@react-navigation/native';
 import Main from './routes/Main';
 import SignIn from './routes/SignIn';
 import ClubList from "./routes/ClubList";
 import Club from "./routes/Club";
 import Notice from "./routes/Notice";
 import Timeline from "./routes/Timeline";
 import Posting from "./routes/Posting";
 import Login from "./routes/Login";
 import EditInfo from "./routes/EditInfo";
 import Watch from "./routes/Watch";
 
 const Stack = createNativeStackNavigator();
 
 const App = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
         <Stack.Screen name="Main" component={Main} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="SignIn" component={SignIn} />
         <Stack.Screen name="ClubList" component={ClubList} />
         <Stack.Screen name="Club" component={Club} />
         <Stack.Screen name="Notice" component={Notice} />
         <Stack.Screen name="Timeline" component={Timeline} />
         <Stack.Screen name="Posting" component={Posting} />
         <Stack.Screen name="EditInfo" component={EditInfo} />
         <Stack.Screen name="Watch" component={Watch} />
     </Stack.Navigator>   
   </NavigationContainer>
   );
 };
 
 export default App;