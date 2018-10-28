import React from "react";
import { StyleProvider } from "native-base";
import { createDrawerNavigator } from "react-navigation";
import { AccountList, ContactUs } from "./screens";
import { Font, AppLoading } from "expo";

import getTheme from "./native-base-theme/components";
import platform from "./native-base-theme/variables/platform";

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

    if (loading) {
      return <AppLoading />;
    }

    return (
      <StyleProvider style={getTheme(platform)}>
        <Nav />
      </StyleProvider>
    );
  }
}
