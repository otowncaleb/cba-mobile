import React from "react";
import { StyleSheet } from "react-native";
import {
  Text,
  Card,
  H3,
  H2,
  H1,
  CardItem,
  Body,
  View,
  Left,
  Right,
  Button
} from "native-base";
import { Screen } from "app/components";
import { TransactionList } from "./components";

export default class AccountDetails extends React.Component {
  static navigationOptions = {
    drawerLabel: () => null
  };

  transferMoney = () => {
    const { navigation } = this.props;

    navigation.navigate("Transfer Money", {
      accountId: navigation.getParam("account").id
    });
  };

  render() {
    const { navigation } = this.props;
    const { name, id, balance, transactions } = navigation.getParam("account");

    const accountOverview = (
      <Card style={styles.balanceCard}>
        <CardItem>
          <Left>
            <View>
              <Text style={styles.cardHeading}>Account Number</Text>
              <Text>{id}</Text>
            </View>
          </Left>
          <Right>
            <View>
              <Text style={styles.cardHeading}>Current Balance</Text>
              <H2 style={styles.balance}>{balance}</H2>
            </View>
          </Right>
        </CardItem>
        <CardItem>
          <View
            style={{
              marginTop: -20,
              width: 7000,
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end"
            }}
          >
            <Button onPress={this.transferMoney}>
              <Text>Transfer money</Text>
            </Button>
          </View>
        </CardItem>
      </Card>
    );

    const transactionHistory =
      transactions.length > 0 ? (
        <TransactionList transactions={transactions} />
      ) : (
        <Text style={styles.noRecentHistoryText}>
          There are no recent transactions for this account.
        </Text>
      );

    return (
      <Screen title="Account Details" previousPage="Accounts">
        <H1 style={styles.accountName}>{name}</H1>
        {accountOverview}
        <H3 style={styles.transactionHistoryHeading}>Transaction History</H3>
        {transactionHistory}
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  accountName: {
    paddingTop: 10,
    paddingBottom: 10
  },
  cardHeading: {
    paddingBottom: 10,
    color: "grey"
  },
  balance: {
    color: "#85bb65"
  },
  transactionHistoryHeading: {
    paddingTop: 20,
    paddingBottom: 10
  },
  noRecentHistoryText: {
    fontStyle: "italic"
  }
});
