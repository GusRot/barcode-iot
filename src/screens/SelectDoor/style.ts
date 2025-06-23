import styled from "styled-components/native"
import { RFPercentage } from "react-native-responsive-fontsize"
import { SafeAreaView } from "react-native-safe-area-context"
import type { DefaultTheme } from "styled-components"

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => {
    if (!theme || !theme.colors || !theme.colors.background) {
      return "#f0f2f5"
    }
    return theme.colors.background
  }};
`

export const ContentView = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
`

export const ButtonContainer = styled.View`
  align-items: center;
  padding-bottom: ${RFPercentage(3)}px;
  width: 100%;
`
