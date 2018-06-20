import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Keyboard, Animated, Platform, StyleSheet } from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  static propTypes = {
    tintColor: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }

  componentDidMount() {
    let showListener = 'keyboardWillHide';
    let hideListener = 'keyboardWillShow';
    if (Platform.OS === 'android') {
      showListener = 'keyboardDidHide';
      hideListener = 'keyboardDidShow';
    }
    this.keyboardHideListener = Keyboard.addListener(showListener, this.keyboardHide);
    this.keyboardShowListener = Keyboard.addListener(hideListener, this.keyboardShow);
  }

  componentWillUnmount() {
    this.keyboardHideListener.remove();
    this.keyboardShowListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    const containerImageStyles = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ];
    const imageStyles = [
      styles.image,
      { width: this.imageWidth },
      this.props.tintColor ? { tintColor: this.props.tintColor } : null,
    ];
    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyles}>
          <Animated.Image
            style={[StyleSheet.absoluteFill, containerImageStyles]}
            source={require('./images/background.png')}
          />
          <Animated.Image style={imageStyles} source={require('./images/logo.png')} />
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View >
    );
  }
}

export default Logo;
