import { ButtonContainer, TipContainer } from "./style"
import Button from "../../../components/Button"
import TextContainer from "../../../components/Text"

interface SuccessMessageProps {
  doorName: string
  userName: string
  onContinue: () => void
}

export default function SuccessMessage({ doorName, userName, onContinue }: SuccessMessageProps) {
  return (
    <ButtonContainer>
      <TextContainer text={`✅ Welcome ${userName}!`} />
      <TextContainer text={`Door "${doorName}" has been unlocked.`} />
      <Button title={"Continue"} onPress={onContinue} />
      <TipContainer>
        <TextContainer text={`You can scan another QR code to access a different door, or return to door selection.`} />
      </TipContainer>
    </ButtonContainer>
  )
}
