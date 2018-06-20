import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ListItem, Separator } from '../components/List';
import { connect } from 'react-redux';

import { changePrimaryColor } from '../actions/theme';

const colors = ['blue', 'green', 'orange', 'purple'];

function titleCase(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

function generateStyles() {
  const params = {};
  for (const c of colors) {
    params['$' + c] = `$primary${titleCase(c)}`;
  }
  return EStyleSheet.create(params);
}

const styles = generateStyles();

class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
  }
  handleThemePress = (color) => {
    this.props.dispatch(changePrimaryColor(color));
    this.props.navigation.goBack();
  }

  render() {
    const repeatedList = colors.map((c, i) => {
      const styleColor = `$${c}`;
      return (
        <View key={`${c}${i}`} >
          <ListItem
            text={titleCase(c)}
            onPress={() => this.handleThemePress(styles[styleColor])}
            selected
            checkmark={false}
            iconBackGround={styles[styleColor]}
          />
          <Separator />
        </View >
      );
    });
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        {repeatedList}
      </ScrollView >
    );
  }
}

export default connect()(Themes);
