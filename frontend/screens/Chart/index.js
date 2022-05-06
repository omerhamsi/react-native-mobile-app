import React from "react";
import { Text ,Dimensions,StyleSheet} from "react-native";
const screenWidth = Dimensions.get("window").width;
import {
  LineChart,
  BarChart
} from "react-native-chart-kit";

const Chart=({route,navigation})=>{
  const {data}=route.params
  console.log(data)
  const dataTest = {
    labels: ["FirstCar", "SecondCar", "ThirdCar"],
    datasets: [
      {
        data: data
      }
    ]
  };
  return(
    <>
      <LineChart
        data={{
          labels: ["FirstCar", "SecondCar", "ThirdCar"],
          datasets: [
            {
              data: data

            }
          ]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={300}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      <BarChart
        style={{
          marginVertical:8,
          borderRadius: 16
        }}
        data={dataTest}
        width={screenWidth}
        height={300}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: "#000000",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        verticalLabelRotation={30}
      />
    </>
  )
}
export default Chart
