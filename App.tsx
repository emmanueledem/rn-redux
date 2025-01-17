import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./homeScreen/HomeScreen";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
