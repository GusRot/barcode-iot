import { NavigationContainer } from "@react-navigation/native"
import type { AccessResult } from "../types"
import StackRoutes from "./stack.routes"

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}

export type RootStackParamList = {
  SelectDoor: undefined
  AuthResult: {
    doorId: string
    doorName: string
  } & AccessResult
  AccessLog: undefined
  ScanQR: {
    doorId: string
    doorName: string
  }
}
