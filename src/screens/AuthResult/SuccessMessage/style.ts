import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"
import type { DefaultTheme } from "styled-components"

export const ButtonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.padding === "undefined") {
      return "20px"
    }
    return `${RFValue(theme.common.padding)}px`
  }};
`

export const TipContainer = styled.View`
  margin-top: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.padding === "undefined") {
      return "30px"
    }
    return `${RFValue(theme.common.padding * 1.5)}px`
  }};
  padding: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.padding === "undefined") {
      return "15px"
    }
    return `${RFValue(theme.common.padding * 0.75)}px`
  }};
  background-color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.success_light) {
      return "rgba(7,231,142, 0.2)"
    }
    return theme.colors.success_light
  }};
  border-radius: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.radius === "undefined") {
      return "10px"
    }
    return `${RFValue(theme.common.radius)}px`
  }};
  border-left-width: 4px;
  border-left-color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.success) {
      return "#07E78E"
    }
    return theme.colors.success
  }};
`
