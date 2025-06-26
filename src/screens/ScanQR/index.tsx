"use client"

import { useState } from "react"
import { Alert, Keyboard, StyleSheet, Pressable } from "react-native"
import { CameraView, useCameraPermissions } from "expo-camera"
import type { RootStackParamList } from "../../routes"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { BarCodeContainer, BarCodeEnableContainer, SubmitContainer, SafeContainer } from "./style"
import Button from "../../components/Button"
import Header from "../../components/Header"
import ErrorScreen from "../../components/ErrorScreen"
import Splash from "../../components/Splash"
import { checkAccess, appendLog } from "../../services/access"
import type { LogEntry } from "../../types"
import mqttService from "../../services/mqttService"

type Props = NativeStackScreenProps<RootStackParamList, "ScanQR">

export default function ScanQR({ route, navigation }: Props) {
  const { doorId, doorName } = route.params
  const [permission, requestPermission] = useCameraPermissions()
  const [appIsReady, setAppIsReady] = useState(true)
  const [scanned, setScanned] = useState(false)
  const [userHandleCam, setUserHandleCam] = useState(false)

  const handleBarCodeScanned = async ({ data }: { data: string }) => {
    if (scanned) return

    setScanned(true)
    setAppIsReady(false)

    try {
      const uid = data.trim()
      const accessResult = await checkAccess(uid, doorId)

      const logEntry: LogEntry = {
        ts: Date.now(),
        uid,
        doorId,
        result: accessResult.ok ? "success" : accessResult.reason || "unknown_user",
        userName: accessResult.user?.name,
        doorName,
      }

      await appendLog(logEntry)

      // Send to MQTT broker
      try {
        await mqttService.sendDoorLog(logEntry)
      } catch (error) {
        console.error("Failed to send door log to MQTT:", error)
      }

      navigation.navigate("AuthResult", {
        doorId,
        doorName,
        ...accessResult,
      })
    } catch (error) {
      console.error("Error processing QR scan:", error)
      Alert.alert("Error", "Failed to process QR code")
      setScanned(false)
    } finally {
      setAppIsReady(true)
    }
  }

  function handleBarCodeEnable() {
    setUserHandleCam(true)
  }

  function handleBack() {
    navigation.navigate("SelectDoor")
  }

  const handleDismissKeyboard = () => {
    Keyboard.dismiss()
  }

  async function handleEnablePermission(): Promise<void> {
    await requestPermission()
  }

  if (!permission) {
    return <Splash appIsReady={false} />
  }

  if (!permission.granted && userHandleCam) {
    return <ErrorScreen enablePermission={handleEnablePermission} title="Camera access required" />
  }

  if (!appIsReady) {
    return <Splash appIsReady={appIsReady} />
  }

  return (
    <SafeContainer>
      <Pressable onPress={handleDismissKeyboard} style={styles.container}>
        <Header
          title={`Scan QR Code`}
          description={`Door: ${doorName}\nScan employee QR code to check access`}
          fixed={false}
        />

        {!userHandleCam && (
          <BarCodeEnableContainer>
            <Button title={"Enable Camera"} primary={false} onPress={handleBarCodeEnable} />
          </BarCodeEnableContainer>
        )}

        {userHandleCam && permission?.granted && (
          <BarCodeContainer>
            <CameraView
              style={styles.container}
              facing="back"
              onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
              barcodeScannerSettings={{
                barcodeTypes: ["qr", "pdf417", "ean13", "ean8", "code128", "code39"],
              }}
            />
          </BarCodeContainer>
        )}

        <SubmitContainer>
          <Button title={"Back"} onPress={handleBack} two={false} />
        </SubmitContainer>
      </Pressable>
    </SafeContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
