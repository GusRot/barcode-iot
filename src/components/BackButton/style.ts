import styled from "styled-components/native"
import Ionicons from "@expo/vector-icons/Ionicons"
import type { DefaultTheme } from "styled-components"

export const ButtonContainer = styled.TouchableOpacity`
  position: absolute;
  left: 5%;
  top: 20%;
  width: 10%;
  height: 60%;
  text-decoration: none;
  background-color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.secondary_light) {
      return "rgba(251,187,87,0.5)" // fallback
    }
    return theme.colors.secondary_light
  }};
  z-index: 20;
`

export const ButtonContainerFont = styled(Ionicons)`
  font-size: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || typeof theme.fonts.icon_secondary === "undefined") {
      return "30px" // fallback
    }
    return `${theme.fonts.icon_secondary}px`
  }};
  color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.text_dark) {
      return "#000" // fallback
    }
    return theme.colors.text_dark
  }};
`
