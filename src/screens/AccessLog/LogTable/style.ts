import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import Ionicons from "@expo/vector-icons/Ionicons"
import type { DefaultTheme } from "styled-components"

interface StatusIconProps {
  status: "success" | "warning" | "error"
}

export const Container = styled.View`
  margin: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.padding === "undefined") {
      return "20px"
    }
    return `${RFValue(theme.common.padding)}px`
  }};
`

export const RowHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.padding === "undefined") {
      return "15px 10px"
    }
    return `${RFValue(theme.common.padding * 0.75)}px ${RFValue(theme.common.padding * 0.5)}px`
  }};
  background-color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.secondary) {
      return "#FBBB57"
    }
    return theme.colors.secondary
  }};
  border-radius: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.radius === "undefined") {
      return "8px"
    }
    return `${RFValue(theme.common.radius)}px`
  }};
  margin-bottom: ${RFValue(10)}px;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.padding === "undefined") {
      return "12px 10px"
    }
    return `${RFValue(theme.common.padding * 0.6)}px ${RFValue(theme.common.padding * 0.5)}px`
  }};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.text) {
      return "#a5a5a5"
    }
    return theme.colors.text
  }};
`

export const TextHeader = styled.Text`
  flex: 1;
  font-size: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || typeof theme.fonts.primary === "undefined") {
      return "16px"
    }
    return `${RFValue(theme.fonts.primary - 2)}px`
  }};
  font-family: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || !theme.fonts.family || !theme.fonts.family.bold) {
      return "Roboto_700Bold"
    }
    return theme.fonts.family.bold
  }};
  color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.text_dark) {
      return "#000"
    }
    return theme.colors.text_dark
  }};
  text-align: center;
`

export const Text = styled.Text`
  flex: 1;
  font-size: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || typeof theme.fonts.secondary === "undefined") {
      return "14px"
    }
    return `${RFValue(theme.fonts.secondary)}px`
  }};
  font-family: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || !theme.fonts.family || !theme.fonts.family.regular) {
      return "Roboto_400Regular"
    }
    return theme.fonts.family.regular
  }};
  color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.text_dark) {
      return "#000"
    }
    return theme.colors.text_dark
  }};
  text-align: center;
`

export const TextTime = styled.Text`
  flex: 1.2;
  font-size: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || typeof theme.fonts.small === "undefined") {
      return "12px"
    }
    return `${RFValue(theme.fonts.small)}px`
  }};
  font-family: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || !theme.fonts.family || !theme.fonts.family.regular) {
      return "Roboto_400Regular"
    }
    return theme.fonts.family.regular
  }};
  color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.text_dark) {
      return "#000"
    }
    return theme.colors.text_dark
  }};
  text-align: center;
`

export const StatusIcon = styled(Ionicons)<StatusIconProps>`
  flex: 0.5;
  font-size: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || typeof theme.fonts.icon_secondary === "undefined") {
      return "24px"
    }
    return `${RFValue(theme.fonts.icon_secondary - 6)}px`
  }};
  color: ${({ status, theme }: { status: "success" | "warning" | "error"; theme: DefaultTheme }) => {
    if (!theme || !theme.colors) {
      switch (status) {
        case "success":
          return "#07E78E"
        case "warning":
          return "#FBBB57"
        case "error":
          return "#D91d43"
        default:
          return "#D91d43"
      }
    }
    switch (status) {
      case "success":
        return theme.colors.success
      case "warning":
        return theme.colors.secondary
      case "error":
        return theme.colors.attention
      default:
        return theme.colors.attention
    }
  }};
  text-align: center;
`

export const EmptyText = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || typeof theme.fonts.primary === "undefined") {
      return "18px"
    }
    return `${RFValue(theme.fonts.primary)}px`
  }};
  font-family: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || !theme.fonts.family || !theme.fonts.family.regular) {
      return "Roboto_400Regular"
    }
    return theme.fonts.family.regular
  }};
  color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.text) {
      return "#a5a5a5"
    }
    return theme.colors.text
  }};
  text-align: center;
  margin-top: ${RFValue(50)}px;
`
