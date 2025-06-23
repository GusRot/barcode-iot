"use client"

import { useCallback } from "react"
import Entypo from "@expo/vector-icons/Entypo"
import * as SplashScreen from "expo-splash-screen"
import { Text } from "react-native"
import { ContainerView } from "../../global/styles/theme"

export default function Splash({ appIsReady }: { appIsReady: boolean }) {
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      console.log("Hiding splash screen...")
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  console.log("Splash render - appIsReady:", appIsReady)

  return (
    <ContainerView
      onLayout={onLayoutRootView}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Entypo name="rocket" size={70} />
      <Text style={{ marginTop: 20, fontSize: 18 }}>Loading...</Text>
    </ContainerView>
  )
}
