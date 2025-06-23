import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SelectDoor from "../screens/SelectDoor"
import AuthResult from "../screens/AuthResult"
import ScanQR from "../screens/ScanQR"
import AccessLog from "../screens/AccessLog"
import type { RootStackParamList } from "./index"

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="SelectDoor"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SelectDoor" component={SelectDoor} />
      <Stack.Screen name="AuthResult" component={AuthResult} />
      <Stack.Screen name="AccessLog" component={AccessLog} />
      <Stack.Screen name="ScanQR" component={ScanQR} />
    </Stack.Navigator>
  )
}
