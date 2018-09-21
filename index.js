/** @format */
// import { Platform } from "react-native";
// if (parseInt(Platform.Version, 10) === 12) {
//   require("array-reverse-polyfill");
// }
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
