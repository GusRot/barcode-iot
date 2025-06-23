import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"
import { centerColumn } from "../../global/styles/theme"
import type { DefaultTheme } from "styled-components"

export const Container = styled.View`
  flex: 1;
  ${centerColumn}
  background-color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.secondary_light) {
      return "rgba(251,187,87,0.5)" // fallback
    }
    return theme.colors.secondary_light
  }};
`

export const Text = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || typeof theme.fonts.title === "undefined") {
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
  padding: 0 ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.padding === "undefined") {
      return "20px" // fallback
    }
    return `${RFValue(theme.common.padding)}px`
  }};
`

export const HelperText = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || typeof theme.fonts.secondary === "undefined") {
      return "16px" // fallback
    }
    return `${RFValue(theme.fonts.secondary)}px`
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
  padding: 0 ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.padding === "undefined") {
      return "20px" // fallback
    }
    return `${RFValue(theme.common.padding)}px`
  }};
  text-align: center;
  margin-top: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.padding === "undefined") {
      return "60px" // fallback
    }
    return `${RFValue(theme.common.padding * 3)}px`
  }};
`
