import { ButtonContainer, TipContainer } from "./style"
import Button from "../../../components/Button"
import TextContainer from "../../../components/Text"

interface SuccessMessageProps {
  doorName: string
  userName: string
  onCheckHistory: () => void
}

export default function SuccessMessage({ doorName, userName, onCheckHistory }: SuccessMessageProps) {
  return (
    <ButtonContainer>
      <TextContainer text={`✅ Welcome ${userName}!`} />
      <TextContainer text={`Door "${doorName}" has been unlocked.`} />
      <Button title={"Check History"} onPress={onCheckHistory} />
      <TipContainer>
        <TextContainer text={`View access logs or use "Back to Door Selection" to access another door.`} />
      </TipContainer>
    </ButtonContainer>
  )
}
