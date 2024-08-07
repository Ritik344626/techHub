import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomInput from '../components/ui/input';
import { Text } from '~/src/components/ui/text';
import AntDesign from '@expo/vector-icons/AntDesign';
import { RFValue } from 'react-native-responsive-fontsize';
import { loginSchema } from '../utils/validations/validationSchema';

interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC<{ navigation: any }> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    Alert.alert('Form Data', JSON.stringify(data, null, 2));
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#ffffff',
      }}
    >
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={30} color="black" />
        <Text style={styles.text}>Sign In</Text>
      </View>

      <View style={styles.inputContainer}>
        <CustomInput
          label="Email"
          name="email"
          control={control}
          placeholder="Enter your email"
          error={errors.email?.message}
        />
        <CustomInput
          label="Password"
          name="password"
          control={control}
          placeholder="Enter your password"
          isPassword
          error={errors.password?.message}
        />
      </View>

      <Text style={styles.span}>Forgot Password?</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.bottomText}>
        Don't have an account? <span style={styles.span}>Sign Up</span>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'monserrat_black',
    fontSize: 25,
    color: 'black',
    fontWeight: '600',
  },
  inputContainer: {
    marginTop: '10%',
  },
  buttonContainer: {
    marginTop: 20,
    background: '#52B6DF',
    borderRadius: 10,
    height: 40,
  },
  button: {
    backgroundColor: '#52B6DF',
    borderRadius: 10,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: RFValue(16),
    fontWeight: '600',
  },
  bottomText: {
    width: '100%',
    textAlign: 'center',
    marginTop: 30,
  },
  span: {
    color: '#4178D4',
  },
});

export default Login;
