import * as React from "react";
import { StyleSheet } from "react-native";
import {
  Form,
  Item,
  Label,
  Picker,
  View,
  DatePicker,
  Button,
  Text
} from "native-base";
import { Screen, CurrencyInput } from "app/components";
import { accounts, payees } from "app/data";

export default class PayBill extends React.Component {
  state = {
    accountId: accounts[0].id,
    payeeId: undefined,
    amount: undefined,
    date: new Date(),
    error: {}
  };

  selectPayee = payeeId => {
    this.setState({ payeeId });
  };

  selectAccount = accountId => {
    this.setState({ accountId });
  };

  changeAmount = amount => {
    this.setState({ amount, error: { amount: undefined } });
  };

  selectDate = date => {
    this.setState({ date });
  };

  payBill = () => {
    const { accountId, payeeId, amount, date } = this.state;
    const account = accounts.find(account => account.id === accountId);
    const payee = payees.find(payee => payee.id === payeeId);

    if (amount > account.balanceAmount) {
      this.setState({
        error: {
          amount: `Amount cannot be greater than your ${
            account.name
          } balance of ${account.balance}`
        }
      });
    } else {
      const { navigation } = this.props;
      navigation.navigate("ConfirmBillPayment", {
        account,
        payee,
        date,
        amount
      });
    }
  };

  render() {
    const { accountId, amount, payeeId, date, error } = this.state;
    const account = accounts.find(account => account.id === accountId);

    const payeePicker = (
      <View style={styles.pickerContainer}>
        <Picker selectedValue={payeeId} onValueChange={this.selectPayee}>
          <Picker.Item label="Select a Payee" value={undefined} />
          {payees.map(payee => (
            <Picker.Item
              key={payee.id}
              label={`${payee.name} - ${payee.accountId}`}
              value={payee.id}
            />
          ))}
        </Picker>
      </View>
    );

    const accountBalanceText = account && (
      <Text style={styles.balanceText}>{account.balance}</Text>
    );

    const accountPicker = (
      <View style={styles.pickerContainer}>
        <Picker selectedValue={accountId} onValueChange={this.selectAccount}>
          {accounts.slice(0, 2).map(account => (
            <Picker.Item
              key={account.id}
              label={`${account.name}`}
              value={account.id}
            />
          ))}
        </Picker>
        {accountBalanceText}
      </View>
    );

    const datePicker = (
      <View style={styles.pickerContainer}>
        <DatePicker
          onDateChange={this.selectDate}
          defaultDate={new Date()}
          minimumDate={new Date()}
          placeholder="Select a date to pay on"
        />
      </View>
    );

    const payBillButton = (
      <Button
        block
        style={styles.payBillButton}
        onPress={this.payBill}
        disabled={!accountId || !payeeId || !date || !amount}
      >
        <Text>Pay bill</Text>
      </Button>
    );

    return (
      <Screen>
        <Form>
          <Item picker stackedLabel>
            <Label>Payee</Label>
            {payeePicker}
          </Item>
          <Item picker stackedLabel>
            <Label>Account</Label>
            {accountPicker}
          </Item>
          <Item picker stackedLabel>
            <Label>Date</Label>
            {datePicker}
          </Item>
          <Item stackedLabel last error={Boolean(error.amount)}>
            <Label>Amount</Label>
            <CurrencyInput onChange={this.changeAmount} />
          </Item>
          {error.amount && <Text style={styles.errorText}>{error.amount}</Text>}
          {payBillButton}
        </Form>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 12,
    color: "red"
  },
  payBillButton: {
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
