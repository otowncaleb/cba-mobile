import React from "react";
import { StyleSheet } from "react-native";
import { Text, Card, H2, H1, CardItem, View, Left, Right } from "native-base";
import { Screen } from "app/components";
import { TransactionList } from "./components";

export default class AccountDetails extends React.Component {
  static navigationOptions = {
    drawerLabel: () => null
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
      <Screen title="Account Details" dynamic>
        <H1 style={styles.accountName}>{name}</H1>
        {accountOverview}
        <H2 style={styles.transactionHistoryHeading}>Transaction history</H2>
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
