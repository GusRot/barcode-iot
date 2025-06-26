"use client"

import { useCallback, useEffect, useState } from "react"
import { View } from "react-native"
import Entypo from "@expo/vector-icons/Entypo"
import * as SplashScreen from "expo-splash-screen"
import * as Font from "expo-font"
import { useFonts, Roboto_300Light, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { ThemeProvider } from "styled-components"
import { theme } from "./src/global/styles/theme"
import Routes from "./src/routes"
import { initializeData } from "./src/services/access"
import mqttService from "./src/services/mqttService"

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)
  const [fontsLoaded, fontError] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
  })

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font)
        await initializeData()

        // Connect to MQTT broker
        try {
          await mqttService.connect()
        } catch (error) {
          console.warn("Failed to connect to MQTT broker:", error)
        }

        await new Promise((resolve) => setTimeout(resolve, 1000))
      } catch (e) {
        console.warn("Error during app initialization:", e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
          <Routes />
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
