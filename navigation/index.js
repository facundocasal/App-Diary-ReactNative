import HomeScreen from "../screens/HomeScreen";
import MemoriesNavigator from "./MemoriesNavigator";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";

export default () => {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      {user ? (
        <NavigationContainer>
          <MemoriesNavigator />
        </NavigationContainer>
      ) : (
        <HomeScreen />
      )}
    </>
  );
};
