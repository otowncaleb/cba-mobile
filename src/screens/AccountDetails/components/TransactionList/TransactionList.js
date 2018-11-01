import React from "react";
import { StyleSheet } from "react-native";
import {
  List,
  Icon,
  ListItem,
  Body,
  View,
  Right,
  Text,
  Separator
} from "native-base";
import { groupBy } from "lodash";

const iconMap = {
  transportation: "taxi",
  food: "food",
  money: "cash"
};

export default function TransactionList({ transactions }) {
  const transactionsByDay = groupBy(transactions, "date");

  return (
    <List style={styles.transactionList}>
      {Object.entries(transactionsByDay).map(([date, transactions]) => (
        <React.Fragment key={date}>
          <Separator bordered>
            <Text style={styles.transactionDate}>{date}</Text>
          </Separator>
          {transactions.map(renderTransaction)}
        </React.Fragment>
      ))}
    </List>
  );
}

function renderTransaction(transaction) {
  const { type, id, description, amount } = transaction;

  const icon = type &&
    iconMap[type] && (
      <Icon
        style={styles.transactionIcon}
        type="MaterialCommunityIcons"
        name={iconMap[type]}
      />
    );

  const transactionAmountStyle =
    amount.charAt(0) === "-" ? {} : styles.creditTransaction;

  return (
    <ListItem key={id}>
      <Body style={{ width: 10 }}>
        <View style={styles.transactionDescription}>
          {icon}
          <Text>{description}</Text>
        </View>
      </Body>
      <Right>
        <Text style={transactionAmountStyle}>{amount}</Text>
      </Right>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  transactionList: {
    marginLeft: -10,
    marginRight: -10
  },
  transactionDate: {
    fontSize: 12
  },
  transactionDescription: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  creditTransaction: {
    color: "#85bb65"
  },
  transactionIcon: {
    marginRight: 10
  }
});
