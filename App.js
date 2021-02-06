import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";

import { AppProvider } from "@store";
import Navigation from "@navigation";

const App = () => {
  let [fontsLoaded] = useFonts({
    "Nunito-Light": require("@assets/fonts/Nunito-Light.ttf"),
    "Nunito-SemiBold": require("@assets/fonts/Nunito-SemiBold.ttf"),
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
