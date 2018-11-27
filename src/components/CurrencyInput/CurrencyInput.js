import * as React from "react";
import { StyleSheet } from "react-native";
import { View } from "native-base";
import { MaskedInput } from "react-native-ui-lib";
import { FormattedCurrency } from "react-native-globalize";

export default class CurrencyInput extends React.Component {
  state = {
    enteredAmount: undefined,
    displayedAmount: undefined
  };

  changeAmount = value => {
    const { onChange } = this.props;
    const enteredAmount = this.formatEnteredAmount(value);
    const displayedAmount = this.formatDisplayedAmount(enteredAmount);

    onChange(Number(displayedAmount));

    this.setState({ enteredAmount, displayedAmount });
  };

  onKeyPress = event => {
    const { nativeEvent } = event;
    const { enteredAmount } = this.state;
    if (nativeEvent.key === "Backspace" && enteredAmount) {
      this.setState({
        enteredAmount: enteredAmount.slice(0, -1)
      });
    }
  };

  formatEnteredAmount = value => {
    if (!value) {
      return;
    }

    const integerPortion = value
      .replace(/[,-\s]/g, "")
      .split(".")[0]
      .replace(/^0*/g, "");

    const decimalPortion = value
      .replace(/[,-\s]/g, "")
      .split(".")
      .slice(1)
      .join("")
      .substring(0, 2);

    let enteredAmount = decimalPortion
      ? `${integerPortion}.${decimalPortion}`
      : integerPortion;

    if (value.substr(-1) === ".") {
      enteredAmount += ".";
    }

    return enteredAmount;
  };

  formatDisplayedAmount = value => {
    if (!value) {
      return;
    }

    let integerPortion = value.split(".")[0].padEnd(1, "0");

    const decimalPortion = (value.split(".")[1] || "").padEnd(2, "0");

    return `${integerPortion}.${decimalPortion}`;
  };

  renderMaskedInput = () => {
    const { displayedAmount } = this.state;

    if (!displayedAmount) {
      return <FormattedCurrency style={styles.currencyText} value={0} />;
    }

    return (
      <FormattedCurrency
        style={styles.currencyText}
        value={Number(displayedAmount)}
      />
    );
  };

  render() {
    return (
      <View style={styles.currencyInput}>
        <MaskedInput
          renderMaskedText={this.renderMaskedInput}
          keyboardType={"numeric"}
          onChangeText={this.changeAmount}
          onKeyPress={this.onKeyPress}
          value={this.state.enteredAmount}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  currencyInput: {
    marginTop: 8,
    marginBottom: 10
  },
  currencyText: {
    fontSize: 16
  }
});
