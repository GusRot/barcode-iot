"use client"

import { useCallback, useEffect, useState } from "react"
import { useFocusEffect } from "@react-navigation/native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { RootStackParamList } from "../../routes"
import type { Door } from "../../types"
import { getDoors } from "../../services/access"
import HeaderWithMenu from "../../components/HeaderWithMenu"
import Button from "../../components/Button"
import { Container, ContentView, ButtonContainer } from "./style"
import { Alert, Keyboard, Pressable, Modal } from "react-native"
import DoorPicker from "./DoorPicker"
import OptionsModal from "../../components/OptionsModal"

type Props = NativeStackScreenProps<RootStackParamList, "SelectDoor">

export default function SelectDoor({ navigation }: Props) {
  const [doors, setDoors] = useState<Door[]>([])
  const [selectedDoor, setSelectedDoor] = useState<Door | null>(null)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    loadDoors()
  }, [])

  useFocusEffect(
    useCallback(() => {
      loadDoors()
    }, []),
  )

  async function loadDoors() {
    try {
      const doorList = await getDoors()
      setDoors(doorList)
    } catch (error) {
      console.error("Error loading doors:", error)
      Alert.alert("Error", "Failed to load doors")
    }
  }

  function handleConfirm() {
    if (!selectedDoor) {
      Alert.alert("Please select a door")
      return
    }

    navigation.navigate("ScanQR", {
      doorId: selectedDoor.id,
      doorName: selectedDoor.name,
    })
  }

  function handleModalOpen() {
    setModal(true)
  }

  function handleModalClose() {
    setModal(false)
  }

  function handleAccessLog() {
    navigation.navigate("AccessLog")
  }

  const handleDismissKeyboard = () => {
    Keyboard.dismiss()
  }

  return (
    <Container>
      <Pressable onPress={handleDismissKeyboard} style={{ flex: 1 }}>
        <ContentView>
          <HeaderWithMenu title="Select Door to Access" onMenuPress={handleModalOpen} />
          <DoorPicker doors={doors} selectedDoor={selectedDoor} onDoorSelect={setSelectedDoor} />
        </ContentView>
        <ButtonContainer>
          <Button title="SCAN QR CODE" onPress={handleConfirm} enabled={!!selectedDoor} />
        </ButtonContainer>
      </Pressable>

      <Modal visible={modal}>
        <OptionsModal close={handleModalClose} onAccessLog={handleAccessLog} />
      </Modal>
    </Container>
  )
}
