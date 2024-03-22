import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { ChartScreen } from './src/components/ChartScreen/ChartScreen';


const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <View style={{padding: 48}}>
        <Button
      title="Go to chart"
      onPress={() =>
        navigation.navigate('Chart')
      }
    />
    </View>
    
    
  );
};

const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Chart" component={ChartScreen}/>
      </Stack.Navigator>
  </NavigationContainer>
  );
}

