import { Container, MenuButton, MenuIcon } from "./style"
import Header from "../Header"

interface HeaderWithMenuProps {
  title?: string
  description?: string
  onMenuPress: () => void
}

export default function HeaderWithMenu({ title, description, onMenuPress }: HeaderWithMenuProps) {
  return (
    <Container>
      <Header title={title} description={description} fixed={true} />
      <MenuButton onPress={onMenuPress}>
        <MenuIcon name="menu" />
      </MenuButton>
    </Container>
  )
}
