import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/List';

import currencies from '../data/currencies';

const CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }
  handlePress = () => {
    // go back to the previous
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === CURRENT_CURRENCY}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default CurrencyList;
