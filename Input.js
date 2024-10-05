import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  style,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, style]} // Allow custom styles
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry} // For password inputs
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
  },
});

export default Input;