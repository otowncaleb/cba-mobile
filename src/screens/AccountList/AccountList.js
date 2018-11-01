import React from "react";
import { StyleSheet } from "react-native";
import { Card, Body, Right, Text, Icon, View, CardItem, H3 } from "native-base";
import { groupBy } from "lodash";
import { Screen } from "app/components";
import { accounts } from "app/data";

export default class AccountList extends React.Component {
  render() {
    const accountsByType = groupBy(accounts, "type");

    const accountsLists = Object.entries(accountsByType).map(
      ([accountType, accountsOfType]) =>
        this.renderAccountGroup(accountType, accountsOfType)
    );

    return <Screen>{accountsLists}</Screen>;
  }

  renderAccountGroup = (accountType, accounts) => {
    return (
      <View key={accountType} style={styles.accountGroup}>
        <H3 style={styles.accountType}>{accountType}</H3>
        <Card>{accounts.map(this.renderAccount)}</Card>
      </View>
    );
  };

  renderAccount = account => {
    return (
      <CardItem
        key={account.name}
        bordered
        button
        onPress={() => this.onSelectAccount(account)}
      >
        <Body>
          <Text numberOfLines={1} style={styles.accountName}>
            {account.name}
          </Text>
        </Body>
        <Right>
          <View style={styles.listItemRight}>
            <Text style={styles.balance}>{account.balance}</Text>
            <Icon name="arrow-forward" />
          </View>
        </Right>
      </CardItem>
    );
  };

  onSelectAccount = account =>
    this.props.navigation.navigate("AccountDetails", {
      account
    });
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
  },
  accountGroup: {
    paddingTop: 20
  },
  accountName: {
    marginLeft: -10
  },
  accountType: {
    marginBottom: 5
  }
});
