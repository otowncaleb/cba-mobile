import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { withNavigation } from "react-navigation";
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Footer
} from "native-base";
import { Constants } from "expo";

class Screen extends React.Component {
  render() {
    const { title, children, navigation, dynamic, map, footer } = this.props;

    const navigationButton = dynamic ? (
      <Button transparent onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" />
      </Button>
    ) : (
      <Button transparent onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" />
      </Button>
    );

    return (
      <Container>
        <View style={styles.statusBar} />
        <Header>
          <Left>{navigationButton}</Left>
          <Body>
            <Title>{title || navigation.state.routeName}</Title>
          </Body>
          <Right />
        </Header>
        {map ? (
          <View style={{ flex: 1, minHeight: 150 }}>{children}</View>
        ) : (
          <Content padder>{children}</Content>
        )}
        {footer && <Footer>{footer}</Footer>}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#3F51B5",
    height: Constants.statusBarHeight
  }
});

export default withNavigation(Screen);
