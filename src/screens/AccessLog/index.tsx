"use client"

import { useState, useCallback } from "react"
import { useFocusEffect } from "@react-navigation/native"
import BackButton from "../../components/BackButton"
import Header from "../../components/Header"
import { SafeContainer } from "../../global/styles/theme"
import type { RootStackParamList } from "../../routes"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { LogEntry } from "../../types"
import { getLog } from "../../services/access"
import LogTable from "./LogTable"
import { ContentContainer, ScrollContainer } from "./style"

type Props = NativeStackScreenProps<RootStackParamList, "AccessLog">

export default function AccessLog({ navigation }: Props) {
  const [logEntries, setLogEntries] = useState<LogEntry[]>([])

  useFocusEffect(
    useCallback(() => {
      loadLog()
    }, []),
  )

  async function loadLog() {
    try {
      const log = await getLog()
      setLogEntries(log)
    } catch (error) {
      console.error("Error loading log:", error)
    }
  }

  function handleBack() {
    navigation.goBack()
  }

  return (
    <SafeContainer>
      <ContentContainer>
        <Header title="Access Log" description="Recent door access attempts" />
        <BackButton onPress={handleBack} />
      </ContentContainer>
      <ScrollContainer>
        <LogTable entries={logEntries} />
      </ScrollContainer>
    </SafeContainer>
  )
}
