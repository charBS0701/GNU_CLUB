/**
 * @format
 * @flow strict-local
 */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Root from "./routes/Root";

const App = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default App;
