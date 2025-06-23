import AsyncStorage from "@react-native-async-storage/async-storage"
import * as Haptics from "expo-haptics"
import type { Door, User, LogEntry, AccessResult } from "../types"

const STORAGE_KEYS = {
  DOORS: "@edgeqr:doors",
  USERS: "@edgeqr:users",
  LOG: "@edgeqr:log",
}

// Initialize data from JSON files on first launch
export async function initializeData(): Promise<void> {
  try {
    console.log("Initializing data...")

    // Check if data already exists
    const existingDoors = await AsyncStorage.getItem(STORAGE_KEYS.DOORS)
    const existingUsers = await AsyncStorage.getItem(STORAGE_KEYS.USERS)

    console.log("Existing doors:", !!existingDoors)
    console.log("Existing users:", !!existingUsers)

    if (!existingDoors || !existingUsers) {
      console.log("Creating initial data...")

      // Load from assets (hardcoded for now since we can't import JSON in Next.js)
      const doors: Door[] = [
        { id: "D1", name: "Reception" },
        { id: "D2", name: "IT Room" },
        { id: "D3", name: "Stock" },
      ]

      const users: User[] = [
        { uid: "EMP001", name: "Alice", level: "admin", doors: ["D1", "D2", "D3"] },
        { uid: "EMP002", name: "Bob", level: "staff", doors: ["D1", "D3"] },
        { uid: "EMP003", name: "Charlie", level: "visitor", doors: ["D1"] },
      ]

      await AsyncStorage.setItem(STORAGE_KEYS.DOORS, JSON.stringify(doors))
      await AsyncStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users))

      console.log("Initial data created")

      // Initialize empty log if it doesn't exist
      const existingLog = await AsyncStorage.getItem(STORAGE_KEYS.LOG)
      if (!existingLog) {
        await AsyncStorage.setItem(STORAGE_KEYS.LOG, JSON.stringify([]))
        console.log("Empty log initialized")
      }

      console.log("Data initialized successfully")
    } else {
      console.log("Data already exists, skipping initialization")
    }
  } catch (error) {
    console.error("Error initializing data:", error)
    throw error
  }
}

export async function getDoors(): Promise<Door[]> {
  try {
    console.log("Getting doors from storage...")
    const doorsJson = await AsyncStorage.getItem(STORAGE_KEYS.DOORS)
    console.log("Doors JSON:", doorsJson)

    const doors = doorsJson ? JSON.parse(doorsJson) : []
    console.log("Parsed doors:", doors)

    return doors
  } catch (error) {
    console.error("Error getting doors:", error)
    return []
  }
}

export async function getUsers(): Promise<User[]> {
  try {
    const usersJson = await AsyncStorage.getItem(STORAGE_KEYS.USERS)
    return usersJson ? JSON.parse(usersJson) : []
  } catch (error) {
    console.error("Error getting users:", error)
    return []
  }
}

export async function checkAccess(uid: string, doorId: string): Promise<AccessResult> {
  try {
    console.log("Checking access for UID:", uid, "Door:", doorId)

    const users = await getUsers()
    const user = users.find((u) => u.uid === uid)

    console.log("Found user:", user)

    if (!user) {
      return {
        ok: false,
        reason: "unknown_user",
      }
    }

    if (!user.doors.includes(doorId)) {
      return {
        ok: false,
        user: { uid: user.uid, name: user.name, level: user.level },
        reason: "unauthorized",
      }
    }

    return {
      ok: true,
      user: { uid: user.uid, name: user.name, level: user.level },
    }
  } catch (error) {
    console.error("Error checking access:", error)
    return {
      ok: false,
      reason: "unknown_user",
    }
  }
}

export async function openDoor(): Promise<void> {
  try {
    // Mock door opening with haptic feedback
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    console.log("Door opened successfully")
  } catch (error) {
    console.error("Error opening door:", error)
  }
}

export async function appendLog(entry: LogEntry): Promise<void> {
  try {
    const logJson = await AsyncStorage.getItem(STORAGE_KEYS.LOG)
    const log: LogEntry[] = logJson ? JSON.parse(logJson) : []

    log.unshift(entry) // Add to beginning for newest first

    // Keep only last 100 entries to prevent storage bloat
    if (log.length > 100) {
      log.splice(100)
    }

    await AsyncStorage.setItem(STORAGE_KEYS.LOG, JSON.stringify(log))
    console.log("Log entry added:", entry)
  } catch (error) {
    console.error("Error appending log:", error)
  }
}

export async function getLog(): Promise<LogEntry[]> {
  try {
    const logJson = await AsyncStorage.getItem(STORAGE_KEYS.LOG)
    return logJson ? JSON.parse(logJson) : []
  } catch (error) {
    console.error("Error getting log:", error)
    return []
  }
}
