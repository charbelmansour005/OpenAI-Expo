import React from "react"
import { View, StyleSheet, Dimensions } from "react-native"
import LottieView from "lottie-react-native"

const ShowApiBusy = (): JSX.Element => (
  <View style={styles.center}>
    <LottieView
      speed={1}
      style={styles.animation}
      source={{
        uri: "https://assets6.lottiefiles.com/packages/lf20_cmyxx0aj.json",
      }}
      autoPlay={true}
      loop={true}
    />
  </View>
)

export default ShowApiBusy

const styles = StyleSheet.create({
  animation: {
    width: "100%",
    height: Dimensions.get("screen").height * 0.4,
    aspectRatio: 1,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
})
