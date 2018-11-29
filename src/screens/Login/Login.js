import React from "react";
import {
  Item,
  Form,
  Label,
  Input,
  Icon,
  Button,
  Text,
  Content
} from "native-base";
import { StyleSheet, TextInput } from "react-native";
import { Screen } from "../../components";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bankInfo: "", password: "", loggedIn: false };
  }

  onLogin = () => {
    if (this.state.bankInfo !== "123") {
      this.setState({
        infoError: "Your Bank Account information is incorrect"
      });
    } else if (this.state.password !== "123") {
      this.setState({
        passwordError: "Your password is incorrect"
      });
    } else {
      this.props.navigation.navigate("Accounts");
    }
  };

  register() {
    this.setState({
      infoError: null,
      passwordError: null
    });
  }

  render() {
    return (
      <Screen hideNavigation title="CBA">
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Bank Account #</Label>
              <Icon active type="Entypo" name="credit-card" />
              <Input
                onChangeText={text =>
                  this.setState({ bankInfo: text, infoError: null })
                }
              />
            </Item>
            {this.state.infoError ? (
              <Text style={styles.errorText}>{this.state.infoError}</Text>
            ) : null}
            <Item floatingLabel last>
              <Label>Password</Label>
              <Icon active name="lock" />
              <Input
                secureTextEntry={true}
                onChangeText={text =>
                  this.setState({ password: text, passwordError: null })
                }
              />
            </Item>
            {this.state.passwordError ? (
              <Text style={styles.errorText}>{this.state.passwordError}</Text>
            ) : null}
            <Button
              full
              title="login"
              onPress={this.onLogin}
              style={styles.loginButton}
            >
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 12,
    color: "red"
  },
  loginButton: {
    marginTop: 30
  },
  clickable: {
    color: "#3F51B5",
    fontWeight: "bold"
  },
  headerPadding: {
    padding: 5,
    fontWeight: "bold"
  }
});
