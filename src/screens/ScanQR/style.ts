import styled from "styled-components/native"
import { RFValue, RFPercentage } from "react-native-responsive-fontsize"
import { SafeAreaView } from "react-native-safe-area-context"
import { alignRow } from "../../global/styles/theme"
import type { DefaultTheme } from "styled-components"

export const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.background) {
      return "#f0f2f5"
    }
    return theme.colors.background
  }};
`

export const SubmitContainer = styled.View`
  ${alignRow};
  justify-content: center;
  padding-bottom: ${RFPercentage(3)}px;
`

export const BarCodeContainer = styled.View`
  flex: 1;
  margin: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.padding === "undefined") {
      return "20px 0" // fallback
    }
    return `${RFValue(theme.common.padding)}px 0`
  }};
  padding-bottom: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.padding === "undefined") {
      return "20px" // fallback
    }
    return `${RFValue(theme.common.padding)}px`
  }};
`

export const BarCodeEnableContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
`

export const TextError = styled.Text`
  text-align: center;
  width: 100%;
  color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.attention) {
      return "#D91d43" // fallback
    }
    return theme.colors.attention
  }};
`
