import React from "react";
import { View, Text, Button } from "react-native";
import { Screen } from "../../components";

export default class ContactUs extends React.Component {
  render() {
    return (
      <Screen title="Contact Us" {...this.props}>
        <Text>Contact Us</Text>
      </Screen>
    );
  }
}
