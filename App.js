import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";

import { AppProvider } from "@store";
import Navigation from "@navigation";

const App = () => {
  let [fontsLoaded] = useFonts({
    "Nunito-Light": require("@assets/fonts/Nunito-Light.ttf"),
    "Nunito-Bold": require("@assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
};

export default App;
