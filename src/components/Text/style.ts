import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"
import { padding } from "../../global/styles/theme"
import type { DefaultTheme } from "styled-components"

export const Text = styled.Text`
  ${padding}
  font-size: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || typeof theme.fonts.primary === "undefined") {
      return "18px" // fallback
    }
    return `${RFValue(theme.fonts.primary)}px`
  }};
  font-family: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || !theme.fonts.family || !theme.fonts.family.regular) {
      return "Roboto_400Regular" // fallback
    }
    return theme.fonts.family.regular
  }};
  color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.text_dark) {
      return "#000" // fallback
    }
    return theme.colors.text_dark
  }};
  text-align: center;
`
