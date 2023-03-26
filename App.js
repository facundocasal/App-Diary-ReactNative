import HomeScreen from "./screens/HomeScreen";
// navigation
import MainNavigator from "./navigation";
import { Provider } from "react-redux";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { init } from "./db";
import store from "./store";

init();
export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    </SafeAreaProvider>
  );
}
