import PropTypes from 'prop-types';
import React from 'react';
import color from 'color';
import { View, Text, TouchableWithoutFeedback, TouchableHighlight, Keyboard, TextInput } from 'react-native';
import styles from './styles';

const InputWithButton = (props) => {
  const { onPress, buttonText, editable = true } = props;
  const containerStyles = [styles.container];
  if (!editable) {
    containerStyles.push(styles.containerDisabled);
  }
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);
  const buttonTextStyles = [styles.buttonText];
  if (props.textColor) {
    buttonTextStyles.push({ color: props.textColor });
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={containerStyles}>
        <TouchableHighlight
          underlayColor={underlayColor}
          onPress={onPress}
          style={styles.buttonContainer}
        >
          <Text style={buttonTextStyles}>{buttonText}</Text>
        </TouchableHighlight>
        <View styles={styles.border} />
        <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
      </View>
    </TouchableWithoutFeedback>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  textColor: PropTypes.string,
};

export default InputWithButton;
