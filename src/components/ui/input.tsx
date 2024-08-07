import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import { Controller, Control } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';

interface CustomInputProps extends TextInputProps {
  label: string;
  isPassword?: boolean;
  control: Control<any>;
  name: string;
  error?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  isPassword = false,
  control,
  name,
  error,
  ...textInputProps
}) => {
  const [isHidden, setIsHidden] = React.useState(isPassword);
  const [isFocused, setIsFocused] = React.useState(false);
  const [broderColor, setBorderColor] = useState('grey');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <View
            style={[
              styles.inputContainer,
              isFocused && styles.focusedContainer,
            ]}
          >
            <TextInput
              style={[styles.input]}
              onChangeText={onChange}
              onBlur={() => {
                onBlur();
                setIsFocused(false);
              }}
              onFocus={() => setIsFocused(true)}
              value={value}
              secureTextEntry={isHidden}
              {...textInputProps}
              placeholderTextColor="#999"
              underlineColorAndroid="transparent"
            />
            {isPassword && (
              <TouchableOpacity
                onPress={() => setIsHidden(!isHidden)}
                style={styles.icon}
              >
                <Ionicons
                  name={isHidden ? 'eye-off' : 'eye'}
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            )}
          </View>
        )}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: 'blak',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#F1F5F9',
  },
  focusedContainer: {
    borderColor: '#000',
    borderWidth: 1,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    borderWidth: 0,
    backgroundColor: '#F1F5F9',
    borderColor: 'transparent',
    padding: 0,
    margin: 0,
  },
  icon: {
    padding: 5,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});

export default CustomInput;
