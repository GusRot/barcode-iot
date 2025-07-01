import type { LogEntry } from "../../../types"
import { Container, Row, RowHeader, Text, TextHeader, TextTime, StatusIcon, EmptyText } from "./style"

interface LogTableProps {
  entries: LogEntry[]
}

export default function LogTable({ entries }: LogTableProps) {
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleString("pt-BR")
  }

  const getStatusIcon = (result: string) => {
    switch (result) {
      case "success":
        return "checkmark-circle"
      case "unauthorized":
        return "ban"
      case "unknown_user":
        return "help-circle"
      default:
        return "close-circle"
    }
  }

  const getStatusColor = (result: string) => {
    switch (result) {
      case "success":
        return "success"
      case "unauthorized":
        return "warning"
      case "unknown_user":
        return "error"
      default:
        return "error"
    }
  }

  if (entries.length === 0) {
    return (
      <Container>
        <EmptyText>Nenhuma tentativa de acesso registrada ainda</EmptyText>
      </Container>
    )
  }

  return (
    <Container>
      <RowHeader>
        <TextHeader>Horário</TextHeader>
        <TextHeader>Porta</TextHeader>
        <TextHeader>Usuário</TextHeader>
        <TextHeader>Resultado</TextHeader>
      </RowHeader>

      {entries.map((entry, index) => (
        <Row key={`${entry.ts}-${index}`}>
          <TextTime>{formatTime(entry.ts)}</TextTime>
          <Text>{entry.doorName || entry.doorId}</Text>
          <Text>{entry.userName || entry.uid}</Text>
          <StatusIcon name={getStatusIcon(entry.result)} status={getStatusColor(entry.result)} />
        </Row>
      ))}
    </Container>
  )
}
