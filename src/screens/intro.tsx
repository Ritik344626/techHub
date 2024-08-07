// screens/Intro.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
// import ExpoIcon from '~/assets/icons/client.svg'
type IntroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Intro'>;

type Props = {
  navigation: IntroScreenNavigationProp;
};

const Intro: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <ExpoIcon></ExpoIcon> */}
      <Text>Hello, welcome to our app</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Intro;
