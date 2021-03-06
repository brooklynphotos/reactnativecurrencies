import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

import styles from './styles';

const Icon = ({ checkmark, visible, iconBackGround }) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
  }
  if (iconBackGround) {
    iconStyles.push({
      backgroundColor: iconBackGround,
    });
  }
  return (
    <View style={iconStyles}>
      {checkmark ? <Image style={styles.checkIcon} source={require('./images/check.png')} /> : null}
    </View>
  );
};

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  iconBackGround: PropTypes.string,
};

export default Icon;
