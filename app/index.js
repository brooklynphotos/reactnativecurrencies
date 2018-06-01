import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
// import Home from './screens/Home';
// import CurrencyList from './screens/CurrencyList';
// import Options from './screens/Options';
// import Themes from './screens/Themes';
import Navigator from './config/routes';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57356',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',

  $white: '#fff',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#d0d0d0',
  $darkText: '#343434',

  // $outline: 1,
});
export default () => <Navigator />;
// export default () => <Themes />;
// export default () => <Options />;
// export default () => <CurrencyList />;
// export default () => <Home />;
