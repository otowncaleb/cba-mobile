import React from "react";
import { StyleProvider, Root } from "native-base";
import { FormattedProvider } from "react-native-globalize";

import { Font, AppLoading } from "expo";

import Navigation from "./Navigation";
import getTheme from "./theme/components";
import platform from "./theme/variables/platform";

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
      <Root>
        <StyleProvider style={getTheme(platform)}>
          <FormattedProvider locale="en" currency="USD">
            <Navigation />
          </FormattedProvider>
        </StyleProvider>
      </Root>
    );
  }
}
