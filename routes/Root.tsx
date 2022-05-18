import React from "react";
import Main from "./Main";
import SignIn from "./SignIn";
import ClubList from "./ClubList";
import Club from "./Club";
import Notice from "./Notice";
import Timeline from "./Timeline";
import Posting from "./Posting";
import Login from "./Login";
import EditInfo from "./EditInfo";
import Watch from "./Watch";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Root = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Login"
  >
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
);

export default Root;
