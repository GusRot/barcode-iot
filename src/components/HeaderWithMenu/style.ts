import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"
import Ionicons from "@expo/vector-icons/Ionicons"
import type { TouchableOpacityProps } from "react-native"
import type { DefaultTheme } from "styled-components"

export const Container = styled.View`
  position: relative;
  width: 100%;
`

export const MenuButton = styled.TouchableOpacity<TouchableOpacityProps>`
  position: absolute;
  top: 0;
  right: 20px;
  bottom: 0;
  width: 40px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.radius === "undefined") {
      return "20px"
    }
    return `${RFValue(20)}px`
  }};
  background-color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.secondary_light) {
      return "rgba(251,187,87,0.8)"
    }
    return theme.colors.secondary_light
  }};
`

export const MenuIcon = styled(Ionicons)`
  color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.text_dark) {
      return "#000"
    }
    return theme.colors.text_dark
  }};
  font-size: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || typeof theme.fonts.icon_secondary === "undefined") {
      return "22px"
    }
    return `${RFValue(22)}px`
  }};
`
