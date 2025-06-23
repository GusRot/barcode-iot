"use client"

import { useEffect, useState } from "react"
import { Modal } from "react-native"
import type { RootStackParamList } from "../../routes"
import { SafeContainer } from "../../global/styles/theme"
import HeaderWithMenu from "../../components/HeaderWithMenu"
import BackButton from "../../components/BackButton"
import OptionsModal from "../../components/OptionsModal"
import Button from "../../components/Button"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { openDoor } from "../../services/access"
import ResultCard from "./ResultCard"
import SuccessMessage from "./SuccessMessage"
import { ContentContainer, ScrollContainer, ButtonContainer } from "./style"

type Props = NativeStackScreenProps<RootStackParamList, "AuthResult">

export default function AuthResult({ route, navigation }: Props) {
  const { doorId, doorName, ok, user, reason } = route.params
  const [modal, setModal] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  useEffect(() => {
    if (ok) {
      // Automatically trigger door opening for successful access
      openDoor()
      // Show success message after a brief delay
      setTimeout(() => {
        setShowSuccessMessage(true)
      }, 1500) // 1.5 seconds to show the result card first
    }
  }, [ok])

  function handleModalOpen() {
    setModal(true)
  }

  function handleModalClose() {
    setModal(false)
  }

  function handleAccessLog() {
    navigation.navigate("AccessLog")
  }

  function handleBack() {
    navigation.navigate("SelectDoor")
  }

  function handleCheckHistory() {
    navigation.navigate("AccessLog")
  }

  const title = ok ? "Access Granted" : "Access Denied"
  const description = `Door: ${doorName}`

  return (
    <SafeContainer>
      <ContentContainer>
        <HeaderWithMenu title={title} description={description} onMenuPress={handleModalOpen} />
        <BackButton onPress={handleBack} />
      </ContentContainer>
      <ScrollContainer>
        {ok && showSuccessMessage ? (
          <SuccessMessage doorName={doorName} userName={user?.name || "User"} onCheckHistory={handleCheckHistory} />
        ) : (
          <ResultCard success={ok} user={user} reason={reason} doorName={doorName} />
        )}
      </ScrollContainer>
      <ButtonContainer>
        <Button title="Back to Door Selection" onPress={handleBack} />
      </ButtonContainer>

      <Modal visible={modal}>
        <OptionsModal close={handleModalClose} onAccessLog={handleAccessLog} />
      </Modal>
    </SafeContainer>
  )
}
