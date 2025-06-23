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
        return `${user?.name || "User"} does not have permission for ${doorName}`
      case "unknown_user":
        return "Unknown user - QR code not recognized"
      default:
        return "Access denied"
    }
  }

  return (
    <Container success={success}>
      <Icon name={success ? "checkmark-circle" : "close-circle"} success={success} />

      {success ? (
        <>
          <TextTitle success={success}>Welcome!</TextTitle>
          <UserInfo>
            <Text success={success}>Name: {user?.name}</Text>
            <Text success={success}>Level: {user?.level}</Text>
            <Text success={success}>UID: {user?.uid}</Text>
          </UserInfo>
          <Text success={success}>Door {doorName} unlocked</Text>
        </>
      ) : (
        <>
          <TextTitle success={success}>Access Denied</TextTitle>
          <Text success={success}>{getReasonText()}</Text>
          {user && (
            <UserInfo>
              <Text success={success}>
                User: {user.name} ({user.uid})
              </Text>
            </UserInfo>
          )}
        </>
      )}
    </Container>
  )
}
