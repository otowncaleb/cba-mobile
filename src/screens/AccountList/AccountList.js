import React from "react";
import { Screen } from "../../components";

export default class AccountList extends React.Component {
  render() {
    return <Screen title="Accounts" navigation={this.props.navigation} />;
  }
}
