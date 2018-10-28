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
    return (
      <Container>
        <View style={styles.statusBar} />
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>{this.props.children}</Content>
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
