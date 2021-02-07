import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "@screens/HomeScreen";
import AssignScreen from "@screens/AssignScreen";
import TaskScreen from "@screens/TaskScreen";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Assign"
          component={AssignScreen}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Task"
          component={TaskScreen}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
