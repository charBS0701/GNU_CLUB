/**
 * @format
 * @flow strict-local
 */
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Root from "./routes/Root";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default App;
