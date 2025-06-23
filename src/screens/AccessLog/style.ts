import styled from "styled-components/native"

export const ContentContainer = styled.View`
  position: relative;
`

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  flex: 1;
`
