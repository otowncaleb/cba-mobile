import React from "react";
import { createDrawerNavigator } from "react-navigation";
import { AccountList, ContactUs } from "./screens";
import { Font, AppLoading } from "expo";

const Nav = createDrawerNavigator({
  Accounts: {
    screen: AccountList
  },
  "Contact Us": {
    screen: ContactUs
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;

    return loading ? <AppLoading /> : <Nav />;
  }
}
