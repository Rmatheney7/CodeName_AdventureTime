import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import FooterNav from "../Footer";
import MapViewer from "./MapViewer";
import PlaceSearch from "./PlaceSearch";
import styles from "./../Styles/HomeScreenStyle";

export default class RouteViewer extends Component {
  state = {
    tempAdventure: {
      name: "tempAdventure",
      markerLocations: [],
      cities: [],
      miles: 0
    },
  };
  render() {
    const { navigate } = this.props.navigation;
    const change = {
      location: this.props.set_location,
      gps: this.props.set_gps_marker,
      stop: this.props.set_waypoint
    };
    const info = {
      route: this.props.route,
      waypoint: this.props.waypoint,
      loc: this.props.loc,
      gps: this.props.gps
    };
    return (
      <Grid>
        <Row size={60}>
          <MapViewer
            setLocation={this.props.set_location}
            setGps={this.props.set_gps_marker}
            gps={this.props.gps}
            loc={this.props.loc}
            markers={this.state.tempAdventure.markerLocations}
          />
        </Row>
        <Row size={40}>
          <PlaceSearch
            setMarker={(newMarker, city, miles) => {
              this.setState({
                tempAdventure: {
                  name: "tempAdv",
                  markerLocations: this.state.tempAdventure.markerLocations.concat(
                    newMarker
                  ),
                  cities: this.state.tempAdventure.cities.concat(city),
                  miles: this.state.tempAdventure.miles + miles
                }
              });
            }}
            markers={this.props.markers}
            setAdventure={() => {
              this.props.set_Adventure(
                this.state.tempAdventure,
                true,
                this.props.token
              );
            }}
            tempAdventure={this.state.tempAdventure}
            setWaypoint={() => {
              this.props.set_waypoint(
                this.state.tempAdventure.markerLocations[0]
              );
            }}
            navigation={this.props.navigation}
          />
        </Row>
      </Grid>
    );
  }
}

// <PlaceSearch
// setMarker={this.props.add_marker}
// markers={this.props.markers}
// navigation={this.props.navigation}
// setLocation={this.props.set_location}
// setGps={this.props.set_gps_marker}
// gps={this.props.gps}
// loc={this.props.loc}
// />
//

// <MapViewer
// setLocation={this.props.set_location}
// setGps={this.props.set_gps_marker}
// gps={this.props.gps}
// loc={this.props.loc}
// />
