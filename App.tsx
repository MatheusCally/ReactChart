import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button, Text, View, ScrollView,Platform} from 'react-native';
import { render } from "react-dom";
import { VictoryChart, VictoryLine, VictoryBar, Background, VictoryAxis, VictoryTheme, VictoryVoronoiContainer, VictoryTooltip} from 'victory-native';
import * as VictoryWeb from 'victory'

const tooltip = Platform.OS === 'web' ? require('victory') : require('victory-native')
tooltip.VictoryTooltip
const data = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 6},
];
const Stack = createNativeStackNavigator();
const ChartScreen = ({navigation}) => {
  return (
    
<VictoryChart containerComponent={<VictoryVoronoiContainer />}

      >
<VictoryAxis style={{ 
    ticks: {stroke: "transparent"},
    tickLabels: { fill:"transparent"}, 
}} />
<VictoryAxis dependentAxis style={{ 
    grid: {stroke: "grey"}
}} />
        
        <VictoryBar
        cornerRadius={{ topLeft: 4}}
          style={{ data: { fill: "#00a8e8" }, labels: { fontSize: 9}}}
          data={data}
          labels={({ datum }) => `x: ${datum.x}, y: ${datum.y}`}

          labelComponent={Platform.OS === 'web' ? <VictoryWeb.VictoryTooltip dy={0} renderInPortal={false} centerOffset={{ x: 25 }}/> : <VictoryTooltip dy={0} renderInPortal={false} centerOffset={{ x: 25 }}/>}
        />
      </VictoryChart>



      
    
  )
}
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

