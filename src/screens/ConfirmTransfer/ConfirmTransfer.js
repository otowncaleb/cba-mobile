import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, Card, CardItem, Left, Body, View, Button } from "native-base";
import { FormattedCurrency } from "react-native-globalize";
import { Screen } from "app/components";

export default class ConfirmTransfer extends React.Component {
  static navigationOptions = {
    drawerLabel: () => null
  };

  cancel = () => this.props.navigation.navigate("Transfer Money");

  confirm = () =>
    this.props.navigation.navigate("Accounts", {
      transferCompleted: true
    });

  render() {
    const { navigation } = this.props;
    const toAccount = navigation.getParam("toAccount");
    const fromAccount = navigation.getParam("fromAccount");

    const amount = (
      <FormattedCurrency
        style={styles.amountText}
        value={navigation.getParam("amount")}
      />
    );

    return (
      <Screen previousPage="Transfer Money" title="Confirm">
        <Text>
          Please review the following details before confirming the transfer.
        </Text>
        <Card>
          <CardItem bordered>
            <Left>
              <Text>From</Text>
            </Left>
            <Body>
              <Text>{fromAccount.name}</Text>
              <Text style={styles.accountBalanceText}>
                {fromAccount.balance}
              </Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Left>
              <Text>To</Text>
            </Left>
            <Body>
              <Text>{toAccount.name}</Text>
              <Text style={styles.accountBalanceText}>{toAccount.balance}</Text>
            </Body>
          </CardItem>
          <CardItem bordered last>
            <Left>
              <Text>Amount</Text>
            </Left>
            <Body>{amount}</Body>
          </CardItem>
          <CardItem>
            <View style={styles.cardFooter}>
              <Button light onPress={this.cancel}>
                <Text>Cancel</Text>
              </Button>
              <Button style={styles.cardFooterButton} onPress={this.confirm}>
                <Text>Confirm</Text>
              </Button>
            </View>
          </CardItem>
        </Card>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  cardFooter: {
    width: 10000,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  cardFooterButton: {
    marginLeft: 16
  },
  amountText: {
    fontSize: 18
  },
  accountBalanceText: {
    fontSize: 14,
    color: "#85bb65"
  }
});
