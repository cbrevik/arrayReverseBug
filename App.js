/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  render() {
    const a = [1, 2];
    const buggy = String(a) === String(a.reverse());

    if (Platform.OS === "ios") {
      const majorVersionIOS = parseInt(Platform.Version, 10);
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            You are running iOS {majorVersionIOS}
          </Text>
          <Text
            style={[styles.instructions, { color: buggy ? "red" : "green" }]}
          >
            {buggy
              ? "You have the Array.reverse-bug"
              : __DEV__
                ? "The RN-debugger uses Chrome, which does not experience the bug. Do not run with the remote debugger attached."
                : "You do not have the bug with this iOS-version"}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>This bug only exists on iOS 12</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
