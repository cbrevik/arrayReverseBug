/** @format */
// import { Platform } from "react-native";
// if (Platform.Version === "12.0") {
//   require("array-reverse-polyfill");
// }
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
