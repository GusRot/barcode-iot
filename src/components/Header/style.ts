import styled from "styled-components/native"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import { endColumn, padding } from "../../global/styles/theme"
import type { DefaultTheme } from "styled-components"

interface ContainerProps {
  fixed: boolean
}

export const Container = styled.View<ContainerProps>`
  ${padding}
  ${endColumn}
  width: 100%;
  padding-bottom: ${RFPercentage(5)}px;
  height: ${({ fixed }: { fixed: boolean }) => (fixed ? `${RFPercentage(17)}px` : "auto")};
  background-color: ${({ theme }: { theme: DefaultTheme }) => {
    // Add defensive check
    if (!theme || !theme.colors || !theme.colors.secondary) {
      return "#FBBB57" // fallback color
    }
    return theme.colors.secondary
  }};
`

export const Title = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || !theme.fonts.title) {
      return "22px" // fallback
    }
    return `${RFValue(theme.fonts.title)}px`
  }};
  font-family: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || !theme.fonts.family || !theme.fonts.family.bold) {
      return "Roboto_700Bold" // fallback
    }
    return theme.fonts.family.bold
  }};
  color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.text_dark) {
      return "#000" // fallback
    }
    return theme.colors.text_dark
  }};
`

export const Description = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || !theme.fonts.primary) {
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
`
