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
import {StyleSheet, TextInput} from "react-native";
import {Screen} from "../../components";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bankInfo: "", password: "", loggedIn:false};
    }

    onLogin = function () {
        if(this.state.bankInfo !== "123456789"){
            this.state.infoError = "Your Bank Account Information appears to be incorrect."
        } if(this.state.password !== "123123") {
            this.state.passwordError = "Your password appears to be incorrect."
        } else if (this.state.bankInfo === "123456789"){
            this.state.infoError = this.state.passwordError = null;
            this.state.loggedIn = true;
            this.props.navigation.navigate("Accounts");
        }
    };

    register() {
        this.setState({
            infoError: null,
            passwordError: null
        })
    }

    render() {
        return (
            <Screen>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Bank Account #</Label>
                            <Icon active name='credit-card' />
                            <Input onChangeText={(text) => this.setState({bankInfo: text})} />
                        </Item>
                        {this.state.infoError ? <Text>{this.state.infoError}</Text> : null}
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Icon active name='lock' />
                            <TextInput secureTextEntry={true} onChangeText={(text) => this.setState({password: value})}/>
                        </Item>
                        {this.state.passwordError ? <Text>{this.state.passwordError}</Text> : null}

                        <Button full title="login" onPress={() => this.onLogin()}>
                            <Text>Login</Text>
                        </Button>
                    </Form>
                </Content>
            </Screen>
        );
    }
}

const styles = StyleSheet.create({
    clickable: {
        color: "#3F51B5",
        fontWeight: "bold"
    },
    headerPadding: {
        padding: 5,
        fontWeight: "bold"
    }
});
