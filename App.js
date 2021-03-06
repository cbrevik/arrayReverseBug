/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

// Better check for remote debugger: https://stackoverflow.com/a/42839384/5703116
const isDebuggingEnabled = typeof atob !== "undefined";

export default class App extends Component {
  render() {
    const a = [1, 2];
    const aString = String(a);
    const aReverseString = String(a.reverse());
    const buggy = aString === aReverseString;

    if (Platform.OS === "ios") {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            You are running iOS {Platform.Version}
          </Text>
          <Text style={{ marginVertical: 10 }}>
            <Text style={styles.variable}>arr</Text> should not equal{" "}
            <Text style={styles.variable}>arr.reverse()</Text>:
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.5, alignItems: "center" }}>
              <Text style={styles.variable}>arr</Text>
              <Text>[{aString}]</Text>
            </View>
            <View style={{ flex: 0.5, alignItems: "center" }}>
              <Text style={styles.variable}>arr.reverse()</Text>
              <Text>[{aReverseString}]</Text>
            </View>
          </View>
          <Text
            style={[
              styles.instructions,
              { color: buggy ? "red" : "green", margin: 10 }
            ]}
          >
            {buggy
              ? "You have the Array.reverse-bug"
              : isDebuggingEnabled
                ? "The RN-debugger uses Chrome, which does not experience the bug. Do not run with the remote debugger attached."
                : "You do not have the bug with this iOS-version"}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            This bug only exists in iOS 12.0. You are running {Platform.OS}
          </Text>
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
  },
  variable: {
    fontWeight: "bold"
  }
});
