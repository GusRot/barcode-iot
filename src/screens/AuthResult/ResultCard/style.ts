import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"
import Ionicons from "@expo/vector-icons/Ionicons"
import type { DefaultTheme } from "styled-components"

interface StyledProps {
  success: boolean
}

export const Container = styled.View<StyledProps>`
  align-items: center;
  width: 90%;
  margin: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.padding === "undefined") {
      return "20px"
    }
    return `${RFValue(theme.common.padding)}px`
  }};
  padding: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.padding === "undefined") {
      return "30px 20px"
    }
    return `${RFValue(theme.common.padding * 1.5)}px ${RFValue(theme.common.padding)}px`
  }};
  background-color: ${({ success, theme }: { success: boolean; theme: DefaultTheme }) => {
    if (!theme || !theme.colors) {
      return success ? "#07E78E" : "#D91d43"
    }
    return success ? theme.colors.success : theme.colors.attention
  }};
  border-radius: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.radius === "undefined") {
      return "15px"
    }
    return `${RFValue(theme.common.radius * 1.5)}px`
  }};
  align-self: center;
`

export const Icon = styled(Ionicons)<StyledProps>`
  font-size: ${RFValue(60)}px;
  color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.shape) {
      return "#fff"
    }
    return theme.colors.shape
  }};
  margin-bottom: ${RFValue(20)}px;
`

export const TextTitle = styled.Text<StyledProps>`
  font-size: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || typeof theme.fonts.title === "undefined") {
      return "24px"
    }
    return `${RFValue(theme.fonts.title + 2)}px`
  }};
  font-family: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || !theme.fonts.family || !theme.fonts.family.bold) {
      return "Roboto_700Bold"
    }
    return theme.fonts.family.bold
  }};
  color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.shape) {
      return "#fff"
    }
    return theme.colors.shape
  }};
  text-align: center;
  margin-bottom: ${RFValue(15)}px;
`

export const Text = styled.Text<StyledProps>`
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
    if (!theme || !theme.colors || !theme.colors.shape) {
      return "#fff"
    }
    return theme.colors.shape
  }};
  text-align: center;
  margin-bottom: ${RFValue(8)}px;
`

export const UserInfo = styled.View`
  margin: ${RFValue(15)}px 0;
  padding: ${RFValue(15)}px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${RFValue(10)}px;
  width: 100%;
`
