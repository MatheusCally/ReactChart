import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button, Text, View, ScrollView,Platform} from 'react-native';
import { render } from "react-dom";
import { VictoryChart, VictoryLine, VictoryBar, Background, VictoryAxis, VictoryTheme, VictoryVoronoiContainer, VictoryTooltip} from 'victory-native';
import * as VictoryWeb from 'victory'
import {customStyle} from './App.styles'
import { ChartScreen } from './src/components/ChartScreen/ChartScreen';


const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
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

