import * as React from "react";
import dateFormat from "dateformat";
import { StyleSheet } from "react-native";
import { Text, Card, CardItem, Left, Body, View, Button } from "native-base";
import { FormattedCurrency } from "react-native-globalize";
import { Screen } from "app/components";

export default class ConfirmBillPayment extends React.Component {
  static navigationOptions = {
    drawerLabel: () => null
  };

  cancel = () => this.props.navigation.navigate("Pay Bill");

  confirm = () =>
    this.props.navigation.navigate("Accounts", {
      billPaymentCompleted: true
    });

  render() {
    const { navigation } = this.props;
    const account = navigation.getParam("account");
    const payee = navigation.getParam("payee");
    const date = navigation.getParam("date");

    const amount = (
      <FormattedCurrency
        style={styles.amountText}
        value={navigation.getParam("amount")}
      />
    );

    return (
      <Screen previousPage="Pay Bill" title="Confirm">
        <Text>
          Please review the following details before confirming the bill
          payment.
        </Text>
        <Card>
          <CardItem bordered>
            <Left>
              <Text>Payee</Text>
            </Left>
            <Body>
              <Text>{payee.name}</Text>
              <Text style={styles.payeeAccountIdText}>
                {`Account #${payee.accountId}`}
              </Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Left>
              <Text>Account</Text>
            </Left>
            <Body>
              <Text>{account.name}</Text>
              <Text style={styles.accountBalanceText}>{account.balance}</Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Left>
              <Text>Date</Text>
            </Left>
            <Body>
              <Text>
                {dateFormat(date, "fullDate")
                  .split(" ")
                  .slice(1)
                  .join(" ")}
              </Text>
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
    flex: 1,
    fontSize: 18
  },
  payeeAccountIdText: {
    fontSize: 14
  },
  accountBalanceText: {
    fontSize: 14,
    color: "#85bb65"
  }
});
