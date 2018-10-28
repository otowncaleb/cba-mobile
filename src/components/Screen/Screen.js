import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";
import { Constants } from "expo";

export default class Screen extends React.Component {
  render() {
    const { title, children, navigation, dynamic } = this.props;

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
            <Title>{title}</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>{children}</Content>
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
