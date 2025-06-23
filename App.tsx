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
        console.log("Starting app preparation...")

        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font)
        console.log("Fonts loaded")

        // Initialize app data (doors, users, log)
        await initializeData()
        console.log("App data initialized")

        // Artificially delay for one second to ensure everything is ready
        await new Promise((resolve) => setTimeout(resolve, 1000))
      } catch (e) {
        console.warn("Error during app initialization:", e)
      } finally {
        // Tell the application to render
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      console.log("Hiding splash screen...")
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  console.log("Rendering main app...")
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
