import { RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"
import type { DefaultTheme } from "styled-components"

interface InputContainerProps {
  focus: boolean
  filled: boolean
}

export const InputContainer = styled.TextInput<InputContainerProps>`
  text-align: center;
  align-self: center;
  width: 90%;
  font-family: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || !theme.fonts.family || !theme.fonts.family.regular) {
      return "Roboto_400Regular" // fallback
    }
    return theme.fonts.family.regular
  }};
  font-size: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.fonts || typeof theme.fonts.primary === "undefined") {
      return "18px" // fallback
    }
    return `${RFValue(theme.fonts.primary)}px`
  }};
  color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.text_dark) {
      return "#000" // fallback
    }
    return theme.colors.text_dark
  }};
  border: 1px solid ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.text) {
      return "#a5a5a5" // fallback
    }
    return theme.colors.text
  }};
  padding: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.padding === "undefined") {
      return "20px 0" // fallback
    }
    return `${RFValue(theme.common.padding)}px 0`
  }};
  border-radius: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.common || typeof theme.common.radius === "undefined") {
      return "10px" // fallback
    }
    return `${RFValue(theme.common.radius)}px`
  }};

  ${({ filled, theme }: { filled: boolean; theme: DefaultTheme }) =>
    filled &&
    css`
      border-color: ${!theme || !theme.colors || !theme.colors.primary ? "#13274A" : theme.colors.primary};
    `};

  ${({ focus, theme }: { focus: boolean; theme: DefaultTheme }) =>
    focus &&
    css`
      border-color: ${!theme || !theme.colors || !theme.colors.primary ? "#13274A" : theme.colors.primary};
    `};
`
