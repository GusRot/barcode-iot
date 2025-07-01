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
      <TextContainer text={`✅ Bem-vindo ${userName}!`} />
      <TextContainer text={`Porta "${doorName}" foi desbloqueada.`} />
      <Button title={"Ver Histórico"} onPress={onCheckHistory} />
      <TipContainer>
        <TextContainer
          text={`Visualize os logs de acesso ou use "Voltar à Seleção de Portas" para acessar outra porta.`}
        />
      </TipContainer>
    </ButtonContainer>
  )
}
