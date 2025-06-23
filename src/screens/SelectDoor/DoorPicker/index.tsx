"use client"
import { Picker } from "@react-native-picker/picker"
import type { Door } from "../../../types"
import { PickerContainer } from "./style"

interface DoorPickerProps {
  doors: Door[]
  selectedDoor: Door | null
  onDoorSelect: (door: Door | null) => void
}

export default function DoorPicker({ doors, selectedDoor, onDoorSelect }: DoorPickerProps) {
  function handleDoorChange(doorId: string) {
    if (doorId === "") {
      onDoorSelect(null)
    } else {
      const door = doors.find((d) => d.id === doorId)
      onDoorSelect(door || null)
    }
  }

  return (
    <PickerContainer>
      <Picker selectedValue={selectedDoor?.id || ""} onValueChange={handleDoorChange} style={{ width: "100%" }}>
        <Picker.Item label="Select a door..." value="" />
        {doors.map((door) => (
          <Picker.Item key={door.id} label={door.name} value={door.id} />
        ))}
      </Picker>
    </PickerContainer>
  )
}
