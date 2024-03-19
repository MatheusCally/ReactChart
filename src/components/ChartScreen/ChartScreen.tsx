import { Platform, View } from "react-native"
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTooltip, VictoryVoronoiContainer } from "victory-native"
import * as VictoryWeb from 'victory'
import { Style } from "./ChartScreen.styles";

const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 6},
  ];

export const ChartScreen = () => {
    return (
      <View>
        <View style={Style.blue}></View>
            <VictoryChart 
                    events={[{
                    target: 'parent',
                    eventHandlers: {
                        onTouchEnd: () => {},
                        },
                    },]} 
                    containerComponent={<VictoryVoronoiContainer voronoiDimension="x" />}>
                        
                <VictoryAxis style={{ 
                    ticks: {stroke: "transparent"},
                    tickLabels: { fill:"transparent"}, 
                }} />
                <VictoryAxis dependentAxis style={{ 
                    grid: {stroke: "grey"}
                }} />  
                <VictoryBar
                    barRatio={0.8}
                    cornerRadius={{ topLeft: 4}}
                    style={{ data: { fill: "#00a8e8" }, labels: { fontSize: 9}}}
                    data={data}
                    labels={({ datum }) => `x: ${datum.x}, y: ${datum.y}`}
                    labelComponent={Platform.OS === 'web' ? <VictoryWeb.VictoryTooltip dy={0} renderInPortal={false} centerOffset={{ x: 25 }}/> : <VictoryTooltip dy={0} renderInPortal={false} centerOffset={{ x: 25 }}/>}
                />
        </VictoryChart>
      </View>
    )
  }