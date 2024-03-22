import { Platform, View, Text, ScrollView } from "react-native"
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTooltip, VictoryVoronoiContainer, VictoryLine, VictoryScatter} from "victory-native"
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
      <ScrollView style={{backgroundColor: "rgb(224 227 226)", paddingLeft: 16, paddingRight: 16, width: "100%", height: "100%"}}>
        <View style={{margin: 16, padding: 16, borderWidth: 1, alignItems: 'center'}}>
          <View>
            <View style={Style.header}>
            <Text style={{fontSize: 54, padding: 16}}>Meu Faturamento</Text>
          </View>
          <View>
          <VictoryChart
                      domainPadding={{ x: 100 }}
                      events={[{
                      target: 'parent',
                      eventHandlers: {
                          onTouchEnd: () => {},
                          },
                      },]} 
                      width={400}
                      containerComponent={<VictoryVoronoiContainer voronoiDimension="x" />}>

                  <VictoryAxis
                    tickValues={data.map((value)=>value.x)}/>

                  <VictoryAxis dependentAxis style={{ 
                      grid: {stroke: "grey"}
                  }} />  

                  <VictoryBar
                      alignment="middle"
                      cornerRadius={{ topLeft: 12}}
                      style={{ data: { fill: "#00a8e8" }, labels: { fontSize: 9}}}
                      data={data}
                      labels={({ datum }) => `x: ${datum.x}, y: ${datum.y}`}
                      labelComponent={Platform.OS === 'web' ? <VictoryWeb.VictoryTooltip dy={0} renderInPortal={false} centerOffset={{ x: 25 }}/> : <VictoryTooltip dy={0} renderInPortal={false} centerOffset={{ x: 25 }}/>}
                  />
          </VictoryChart>
        </View>
      </View>
        
    </View>

        <View style={{margin: 16, padding: 16, borderWidth: 1, alignItems: 'center'}}>
          <View>
          <View style={Style.header}>
          <Text style={{fontSize: 54, padding: 16}}>Ticket médio</Text>
        </View>
          <VictoryChart>

            <VictoryAxis/>

            <VictoryAxis dependentAxis/>

            <VictoryLine data={data} interpolation="natural" style={{data: {stroke: "#00a8e8"}}}/>

            <VictoryScatter
              style={{ data: { fill: "#00a8e8", stroke: 'black', strokeWidth: 2 } }}
              size={7}
              data={data}
            />

          </VictoryChart>
          </View>
          
        </View>
            
      </ScrollView>
    )
  }