import styled from "styled-components/native"
import { RFPercentage } from "react-native-responsive-fontsize"

export const ContentContainer = styled.View`
  position: relative;
`

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
  },
})`
  flex: 1;
`

export const ButtonContainer = styled.View`
  align-items: center;
  padding-bottom: ${RFPercentage(3)}px;
  width: 100%;
`
