import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

export default createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },

    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
    Options: {
      screen: Options,
    },
    Themes: {
      screen: Themes,
    },
  },
  {
    mode: 'modal',
    cardStyle: {
      paddingTop: StatusBar.currentHeight,
    },
  },
);
