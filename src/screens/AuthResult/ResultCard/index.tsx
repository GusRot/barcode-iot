import { Container, Icon, Text, TextTitle, UserInfo } from "./style"

interface ResultCardProps {
  success: boolean
  user?: { uid: string; name: string; level: string }
  reason?: "unauthorized" | "unknown_user"
  doorName: string
}

export default function ResultCard({ success, user, reason, doorName }: ResultCardProps) {
  const getReasonText = () => {
    switch (reason) {
      case "unauthorized":
        return `${user?.name || "Usuário"} não tem permissão para ${doorName}`
      case "unknown_user":
        return "Usuário desconhecido - QR code não reconhecido"
      default:
        return "Acesso negado"
    }
  }

  return (
    <Container success={success}>
      <Icon name={success ? "checkmark-circle" : "close-circle"} success={success} />

      {success ? (
        <>
          <TextTitle success={success}>Bem-vindo!</TextTitle>
          <UserInfo>
            <Text success={success}>Nome: {user?.name}</Text>
            <Text success={success}>Nível: {user?.level}</Text>
            <Text success={success}>ID: {user?.uid}</Text>
          </UserInfo>
          <Text success={success}>Porta {doorName} desbloqueada</Text>
        </>
      ) : (
        <>
          <TextTitle success={success}>Acesso Negado</TextTitle>
          <Text success={success}>{getReasonText()}</Text>
          {user && (
            <UserInfo>
              <Text success={success}>
                Usuário: {user.name} ({user.uid})
              </Text>
            </UserInfo>
          )}
        </>
      )}
    </Container>
  )
}
