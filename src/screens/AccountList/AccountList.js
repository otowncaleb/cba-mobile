import React from "react";
import { StyleSheet } from "react-native";
import { Screen } from "../../components";
import { Card, Body, Right, Text, Icon, View, CardItem } from "native-base";

const accounts = [
  {
    name: "Chequing",
    balance: "$16,000"
  },
  {
    name: "Savings",
    balance: "$12,000"
  },
  {
    name: "Credit",
    balance: "$1,000"
  }
];

export default class AccountList extends React.Component {
  onSelectAccount = account =>
    this.props.navigation.navigate("AccountDetails", {
      account
    });

  render() {
    const listItems = accounts.map(account => (
      <CardItem
        key={account.name}
        bordered
        button
        onPress={() => this.onSelectAccount(account)}
      >
        <Body>
          <Text>{account.name}</Text>
        </Body>
        <Right>
          <View style={styles.listItemRight}>
            <Text style={styles.balance}>{account.balance}</Text>
            <Icon name="arrow-forward" />
          </View>
        </Right>
      </CardItem>
    ));

    return (
      <Screen>
        <Card>{listItems}</Card>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  listItemRight: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  balance: {
    marginRight: 20,
    color: "#85bb65"
  }
});
