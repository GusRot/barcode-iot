import type { TouchableOpacityProps } from "react-native"
import { RFValue, RFPercentage } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"
import { padding } from "../../global/styles/theme"
import type { DefaultTheme } from "styled-components"

interface TitleProps extends TouchableOpacityProps {
  primary: boolean
  enabled: boolean
  two: boolean
  font: string
  icon: boolean
}

export const ButtonContainer = styled.TouchableOpacity<TitleProps>`
  ${padding}
  align-items: center;
  width: 90%;
  border-radius: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.radius === "undefined") {
      return "10px" // fallback
    }
    return `${RFValue(theme.common.radius)}px`
  }};
  margin: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.padding === "undefined") {
      return "20px 5%" // fallback
    }
    return `${RFValue(theme.common.padding)}px 5%`
  }};
  border: 1px solid transparent;
  background-color: ${({ primary, enabled, theme }: { primary: boolean; enabled: boolean; theme: DefaultTheme }) => {
    if (!theme || !theme.colors) {
      return primary ? (enabled ? "#13274A" : "rgba(19,39,74,0.35)") : "#f0f2f5" // fallbacks
    }
    return primary ? (enabled ? theme.colors.primary : theme.colors.primary_light) : theme.colors.background
  }};

  ${({ primary, enabled, theme }: { primary: boolean; enabled: boolean; theme: DefaultTheme }) =>
    !primary &&
    css`
      border-color: ${
        !theme || !theme.colors
          ? enabled
            ? "#13274A"
            : "rgba(19,39,74,0.35)"
          : enabled
            ? theme.colors.primary
            : theme.colors.primary_light
      };
    `};

  ${({ two }: { two: boolean }) =>
    two &&
    css`
      height: ${RFPercentage(10)}px;
      width: 42.5%;
      margin-left: 2.5%;
      margin-right: 2.5%;
    `};

  ${({ icon }: { icon: boolean }) =>
    icon &&
    css`
      padding: 0;
    `};
`

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || !theme.fonts.family || !theme.fonts.family.regular) {
      return "Roboto_400Regular" // fallback
    }
    return theme.fonts.family.regular
  }};
  text-align: center;
  font-size: ${({ theme, font }: { theme: DefaultTheme; font: string }) => {
    if (!theme || !theme.fonts) {
      return font === "standard" ? "18px" : "16px" // fallbacks
    }
    return font === "standard" ? `${RFValue(theme.fonts.primary)}px` : `${RFValue(theme.fonts.secondary)}px`
  }};

  color: ${({ primary, enabled, theme }: { primary: boolean; enabled: boolean; theme: DefaultTheme }) => {
    if (!theme || !theme.colors) {
      return primary ? "#fff" : enabled ? "#13274A" : "rgba(19,39,74,0.35)" // fallbacks
    }
    return primary ? theme.colors.shape : enabled ? theme.colors.primary : theme.colors.primary_light
  }};

  ${({ icon, theme }: { icon: boolean; theme: DefaultTheme }) =>
    icon &&
    css`
      font-size: ${
        !theme || !theme.fonts || typeof theme.fonts.icon === "undefined" ? "40px" : `${RFValue(theme.fonts.icon)}px`
      };
    `};
`
