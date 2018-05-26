import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ListItem, Separator } from '../components/List';

const colors = ['blue', 'green', 'orange', 'purple'];

function titleCase(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

function generateStyles() {
  const params = {};
  for (let c of colors) {
    params['$' + c] = `$primary${titleCase(c)}`;
  }
  return EStyleSheet.create(params);
}

const styles = generateStyles();

export default class Themes extends Component {
  handleThemePress = (color) => {
    console.log(`press theme: ${color}`);
  }

  render() {
    const repeatedList = colors.map((c, i) => (
      <ListItem
        key={c}
        text={titleCase(c)}
        onPress={() => this.handleThemePress(styles['$' + c])}
        selected
        checkmark={false}
        iconBackGround={styles['$' + c]}
      />
    ));

    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        {repeatedList}
      </ScrollView>
    );
  }
}
