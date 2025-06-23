import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"
import { centerColumn, centerRow, padding } from "../../global/styles/theme"
import type { TouchableOpacityProps } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import type { DefaultTheme } from "styled-components"

export const ModalContainer = styled.View`
  flex: 1;
  ${centerColumn}
  background-color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.secondary_light) {
      return "rgba(251,187,87,0.5)"
    }
    return theme.colors.secondary_light
  }};
  position: relative;
`

export const ModalOptions = styled.TouchableOpacity<TouchableOpacityProps>`
  ${padding};
  ${centerRow};
  width: 80%;
  margin: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.padding === "undefined") {
      return "10px"
    }
    return `${RFValue(theme.common.padding / 2)}px`
  }};
  border-radius: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.radius === "undefined") {
      return "10px"
    }
    return `${RFValue(theme.common.radius)}px`
  }};
  background-color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.shape) {
      return "#fff"
    }
    return theme.colors.shape
  }};
  border: 1px solid ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors) {
      return "#e0e0e0"
    }
    return "#e0e0e0"
  }};
`

export const ModalText = styled.Text`
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
    if (!theme || !theme.colors || !theme.colors.text_dark) {
      return "#000"
    }
    return theme.colors.text_dark
  }};
  text-align: center;
`

export const IconClose = styled(Ionicons)`
  position: absolute;
  font-size: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || typeof theme.fonts.icon_secondary === "undefined") {
      return "30px"
    }
    return `${RFValue(theme.fonts.icon_secondary)}px`
  }};
  color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.text_dark) {
      return "#000"
    }
    return theme.colors.text_dark
  }};
  top: 50px;
  right: 30px;
  padding: 10px;
`
