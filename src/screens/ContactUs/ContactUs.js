import React from "react";
import {
    Text,
    Button,
    Card,
    Icon,
    CardItem,
    Body,
    Content
} from "native-base";
import {Linking, StyleSheet} from "react-native";
import {Screen} from "app/components";

export default class ContactUs extends React.Component {
    onFindBranch = function () {
        this.props.navigation.navigate("Locate a Branch");
    };

    callSupport = function (tel) {
        Linking.openURL("tel:" + tel);
    };

    emailSupport = function (email) {
        Linking.openURL("mailto:" + email);
    };

    render() {
        return (
            <Screen>
                <Content>
                    <Card>
                        <CardItem bordered>
                            <Body>
                            <Text style={styles.headerPadding}>
                                <Icon name="old-phone" type="Entypo"/> By phone</Text>
                            <Text>24 hours a day, 7 days a week.</Text>

                            <Text>Service in English <Text style={styles.clickable}
                                                           onPress={() => this.callSupport("1-800-555-5555")}>1-800-555-5555</Text></Text>
                            <Text>Service in French <Text style={styles.clickable}
                                                          onPress={() => this.callSupport("1-800-444-4444")}>1-800-444-4444</Text></Text></Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                            <Text style={styles.headerPadding}><Icon name='mail'/> By email</Text>
                            <Text>We will get back to you in under 24 hours!</Text>
                            <Text>Service in both languages: <Text style={styles.clickable}
                                                                   onPress={() => this.emailSupport("eraji035@uottawa.ca")}>abc@cba.ca</Text></Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                            <Text style={styles.headerPadding}>
                                <Icon name="location" type="Entypo"/> Stop by anytime</Text>
                            <Text>Canadian Bank of Agriculture</Text>
                            <Text>1234 Bank Avenue East</Text>
                            <Text>Ottawa, Ontario</Text>
                            <Text>P0P 0P0</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Button full title="locate" onPress={() => this.onFindBranch()}>
                                <Text>Find Your Local Branch</Text>
                            </Button>
                            </Body>
                        </CardItem>
                    </Card>
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
