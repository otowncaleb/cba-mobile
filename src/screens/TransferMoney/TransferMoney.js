import React from "react";
import { StyleSheet } from "react-native";
import { Picker, Form, Item, Label, Text, View, Button } from "native-base";
import { Screen, CurrencyInput } from "app/components";
import { accounts } from "app/data";

export default class TransferMoney extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fromAccountId: undefined,
      toAccountId: undefined,
      amount: undefined,
      error: {}
    };

    const accountId = props.navigation.getParam("accountId", undefined);

    if (!accountId) {
      return;
    }

    const account = accounts.find(account => account.id === accountId);
    if (account.type === "Spending" || account.type === "Savings") {
      this.state.fromAccountId = account.id;
    } else {
      this.state.toAccountId = account.id;
    }
    props.navigation.setParams({ accountId: undefined });
  }

  transfer = () => {
    const { fromAccountId, toAccountId, amount } = this.state;
    const fromAccount = accounts.find(account => account.id === fromAccountId);
    const toAccount = accounts.find(account => account.id === toAccountId);

    if (amount > fromAccount.balanceAmount) {
      this.setState({
        error: {
          amount: `Amount cannot be greater than your ${
            fromAccount.name
          } balance of ${fromAccount.balance}`
        }
      });
    } else {
      const { navigation } = this.props;
      navigation.navigate("ConfirmTransfer", {
        fromAccount,
        toAccount,
        amount
      });
    }
  };

  changeAmount = amount => {
    this.setState({
      amount,
      error: {
        amount: undefined
      }
    });
  };

  selectFromAccount = fromAccountId => {
    this.setState({
      fromAccountId
    });
  };

  selectToAccount = toAccountId => {
    this.setState({
      toAccountId
    });
  };

  renderFromAccountPicker() {
    const { fromAccountId } = this.state;
    const fromAccount = accounts.find(account => account.id === fromAccountId);

    const fromAccountBalanceText = fromAccount && (
      <Text style={styles.balanceText}>{fromAccount.balance}</Text>
    );

    return (
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={fromAccountId}
          onValueChange={this.selectFromAccount}
        >
          <Picker.Item label="Select From Account" value={undefined} />
          {accounts
            .filter(
              account =>
                account.type === "Spending" || account.type === "Savings"
            )
            .map(account => (
              <Picker.Item
                key={account.id}
                label={account.name}
                value={account.id}
              />
            ))}
        </Picker>
        {fromAccountBalanceText}
      </View>
    );
  }

  renderToAccountPicker() {
    const { fromAccountId, toAccountId } = this.state;
    const toAccount = accounts.find(account => account.id === toAccountId);

    const toAccountBalanceText = toAccount && (
      <Text style={styles.balanceText}>{toAccount.balance}</Text>
    );

    return (
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={toAccountId}
          onValueChange={this.selectToAccount}
        >
          <Picker.Item label="Select To Account" value={undefined} />
          {accounts
            .filter(account => account.id !== fromAccountId)
            .map(account => (
              <Picker.Item
                key={account.id}
                label={account.name}
                value={account.id}
              />
            ))}
        </Picker>
        {toAccountBalanceText}
      </View>
    );
  }

  render() {
    const { amount, fromAccountId, toAccountId, error } = this.state;

    const transferButtonEnabled = Boolean(
      amount && fromAccountId && toAccountId
    );
    return (
      <Screen title="Transfer Money">
        <Form>
          <Item picker stackedLabel>
            <Label>From Account</Label>
            {this.renderFromAccountPicker()}
          </Item>
          <Item picker stackedLabel>
            <Label>To Account</Label>
            {this.renderToAccountPicker()}
          </Item>
          <Item />
          <Item stackedLabel last error={Boolean(error.amount)}>
            <Label>Amount</Label>
            <CurrencyInput onChange={this.changeAmount} />
          </Item>
          {error.amount && <Text style={styles.errorText}>{error.amount}</Text>}
        </Form>
        <View style={styles.transferButton}>
          <Button
            block
            disabled={!transferButtonEnabled}
            onPress={this.transfer}
          >
            <Text>Transfer</Text>
          </Button>
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 12,
    color: "red"
  },
  transferButton: {
    marginTop: 40
  },
  pickerContainer: {
    flex: 1,
    marginLeft: -8,
    flexDirection: "row",
    alignItems: "center"
  },
  balanceText: {
    width: 100,
    marginLeft: -5,
    textAlign: "center",
    color: "#85bb65"
  }
});
