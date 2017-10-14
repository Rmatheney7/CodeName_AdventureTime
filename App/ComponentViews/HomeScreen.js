import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import FooterMenu from '../Component/Footer'
import ProfilePastAdv from '../Component/ProfilePastAdv'
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from './Styles/HomeScreenStyle'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (

      <Grid>
        <Row size={15}>
          <Row size={70}>
            <Col size={22}></Col>
            <Col size={56} style={{ justifyContent: 'space-around', alignItems: 'center', marginTop: 30 }}>
              <Text>
                You are signed in as
              </Text>
              <Text>
                {this.props.user.name}.
              </Text>
              <Row style={{ marginTop: 10 }}>
                <Button onPress={() =>
                  this.props.navigation.navigate('Profile')
                } title="Profile"
                  style={{ alignSelf: 'center' }}>
                </Button>
                <Col size={5}></Col>
                <Button
                  title="MapView"
                  style={{ alignSelf: 'center' }}
                  onPress={() =>
                    this.props.navigation.navigate('RoutesContainer')} />
              </Row>
            </Col>
            <Col size={22}>
              <View style={styles.profilePicWrap}>
                <Image style={styles.profilePic} source={{ uri: this.props.user.picture.data.url }}></Image>
              </View>
            </Col>
          </Row>

        </Row>
        <Row size={10}></Row>
        <Row size={40}>
  
        </Row>

        <Row size={30}>
        </Row>





      </Grid>
    );
  }
}


