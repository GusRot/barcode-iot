import { IconClose, ModalContainer, ModalOptions, ModalText } from "./style"

interface ModalProps {
  close: () => void
  onAccessLog: () => void
}

export default function OptionsModal({ close, onAccessLog }: ModalProps) {
  function handleAccessLog() {
    onAccessLog()
    close()
  }

  return (
    <ModalContainer>
      <ModalOptions onPress={handleAccessLog}>
        <ModalText>Histórico de Acesso</ModalText>
      </ModalOptions>
      <IconClose name="close" onPress={close} />
    </ModalContainer>
  )
}
