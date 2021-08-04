import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { languageProvider } from "../store/language";
import { wc } from "./content/walk";

import { StyleSheet, Text, View } from "react-native";

import WalkMainScreen from "../components/walk/WalkMainScreen";

import HeaderBackButton from "../components/shared/headers/HeaderBackButton";

const Stack = createStackNavigator();

const WalkStack = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="WalkMainScreen">
        <Stack.Screen
          name="WalkMainScreen"
          component={WalkMainScreen}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "white",
              height: 130,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: "#3CBF77",
            headerTitleStyle: {
              color: "#3CBF77",
              alignSelf: "center",
              marginRight: Platform.OS === "ios" ? 0 : 42,
              fontWeight: "400",
            },
            headerLeftContainerStyle: { marginLeft: 20 },
            headerLeft: (props) => <HeaderBackButton />,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default WalkStack;

const styles = StyleSheet.create({});
