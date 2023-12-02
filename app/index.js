import { Text, View, Image } from "react-native";
import { Link, Redirect } from "expo-router";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function Index() {
  return (
    <Provider store={store}>
      <Redirect href="/splash/" />
    </Provider>
  ) 
}