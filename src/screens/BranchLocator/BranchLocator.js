import React from "react";
import { StyleSheet } from "react-native";
import { MapView } from "expo";
import { View, Text, Badge, FooterTab, Button } from "native-base";
import { Screen } from "app/components";
import { locations } from "app/data";
import { isCurrentDayOfWeek } from "./utils";

export default class BranchLocator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceFilter: props.navigation.getParam("filter", "ATM")
    };
  }

  render() {
    const { serviceFilter } = this.state;

    const markers = locations
      .filter(location => location.services.includes(serviceFilter))
      .map(this.renderMarker);

    return (
      <Screen map footer={this.renderFooter()}>
        <MapView
          style={{ flex: 1 }}
          mapPadding={{
            top: 100
          }}
          initialRegion={{
            latitude: 45.4231,
            longitude: -75.6831,
            latitudeDelta: 0.06,
            longitudeDelta: 0.06
          }}
        >
          {markers}
        </MapView>
      </Screen>
    );
  }

  renderFooter() {
    const { serviceFilter } = this.state;
    return (
      <FooterTab>
        <Button
          active={serviceFilter === "ATM"}
          onPress={() => this.setState({ serviceFilter: "ATM" })}
        >
          <Text>ATMs</Text>
        </Button>
        <Button
          active={serviceFilter === "Branch"}
          onPress={() => this.setState({ serviceFilter: "Branch" })}
        >
          <Text>Branches</Text>
        </Button>
      </FooterTab>
    );
  }

  renderMarker(location) {
    const { id, coordinates, services, name, address, phone, hours } = location;

    const header = (
      <View style={styles.textContainer}>
        <Text>{name}</Text>
        {services.map(service => (
          <Badge key={service} primary style={styles.locationTypeBadge}>
            <Text style={styles.locationTypeText}>{service}</Text>
          </Badge>
        ))}
      </View>
    );

    const addressInfo = (
      <View style={styles.textContainer}>
        <Text style={styles.calloutLabel}>Address: </Text>
        <Text>{address}</Text>
      </View>
    );

    const phoneInfo = services.includes("Branch") && (
      <View style={styles.textContainer}>
        <Text style={styles.calloutLabel}>Phone: </Text>
        <Text>{phone}</Text>
      </View>
    );

    const hoursInfo = services.includes("Branch") && (
      <View style={styles.textContainer}>
        <Text style={styles.calloutLabel}>Hours: </Text>
        <View>
          {Object.entries(hours).map(([day, hoursForDay]) => (
            <View key={day} style={styles.textContainer}>
              <Text
                style={[
                  styles.dayLabel,
                  isCurrentDayOfWeek(day) && styles.currentDay
                ]}
              >
                {day}
              </Text>
              <Text
                style={
                  (isCurrentDayOfWeek(day) && styles.currentDay) || undefined
                }
              >
                {hoursForDay}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );

    return (
      <MapView.Marker key={id} coordinate={coordinates}>
        <MapView.Callout>
          <View>
            {header}
            {addressInfo}
            {phoneInfo}
            {hoursInfo}
          </View>
        </MapView.Callout>
      </MapView.Marker>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    flexDirection: "row"
  },
  locationTypeBadge: {
    marginLeft: 4
  },
  locationTypeText: {
    fontSize: 12
  },
  calloutLabel: {
    fontWeight: "bold"
  },
  currentDay: {
    fontWeight: "bold"
  },
  dayLabel: {
    width: 110
  }
});
