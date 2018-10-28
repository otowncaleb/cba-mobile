import React from "react";
import { Text } from "native-base";
import { Screen } from "../../components";

export default class AccountDetails extends React.Component {
  static navigationOptions = {
    drawerLabel: () => null
  };

  render() {
    const { navigation } = this.props;
    const account = navigation.getParam("account");

    return (
      <Screen title={account.name} {...this.props} dynamic>
        <Text>Balance: {account.balance}</Text>
        <Text>Transaction history</Text>
      </Screen>
    );
  }
}
