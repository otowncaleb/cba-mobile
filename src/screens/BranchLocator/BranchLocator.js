import React from "react";
import { MapView } from "expo";
import { Screen } from "app/components";

export default class BranchLocator extends React.Component {
  render() {
    return (
      <Screen map>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 45.4231,
            longitude: -75.6831,
            latitudeDelta: 0.06,
            longitudeDelta: 0.06
          }}
        />
      </Screen>
    );
  }
}
