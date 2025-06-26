import mqtt, { type MqttClient } from "mqtt"
import { Buffer } from "buffer"
import type { LogEntry } from "../types"

// Make Buffer available globally for mqtt library
global.Buffer = Buffer

interface MqttConfig {
  host: string
  port: number
  username: string
  password: string
  topic: string
}

class MqttService {
  private client: MqttClient | null = null
  private config: MqttConfig = {
    host: "10.1.0.109",
    port: 1884,
    username: "grotta",
    password: "admin123",
    topic: "iot/doorlog",
  }
  private isConnected = false
  private connectionPromise: Promise<boolean> | null = null

  async connect(): Promise<boolean> {
    if (this.connectionPromise) {
      return this.connectionPromise
    }

    if (this.isConnected && this.client) {
      return true
    }

    this.connectionPromise = new Promise((resolve, reject) => {
      try {
        const brokerUrl = `ws://${this.config.host}:${this.config.port}`

        this.client = mqtt.connect(brokerUrl, {
          username: this.config.username,
          password: this.config.password,
          clientId: `edgeqr_${Math.random().toString(16).slice(2)}`,
          protocol: "ws",
          connectTimeout: 10000,
          reconnectPeriod: 5000,
          clean: true,
          keepalive: 60,
        })

        this.client.on("connect", () => {
          this.isConnected = true
          this.connectionPromise = null
          resolve(true)
        })

        this.client.on("error", (error) => {
          this.isConnected = false
          this.connectionPromise = null
          reject(error)
        })

        this.client.on("close", () => {
          this.isConnected = false
          this.connectionPromise = null
        })

        this.client.on("offline", () => {
          this.isConnected = false
        })

        this.client.on("reconnect", () => {
          console.log("MQTT reconnecting...")
        })

        setTimeout(() => {
          if (!this.isConnected) {
            this.connectionPromise = null
            reject(new Error("MQTT connection timeout"))
          }
        }, 15000)
      } catch (error) {
        this.connectionPromise = null
        reject(error)
      }
    })

    return this.connectionPromise
  }

  async sendDoorLog(entry: LogEntry): Promise<void> {
    if (!this.isConnected || !this.client) {
      try {
        await this.connect()
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error"
        throw new Error(`MQTT not connected: ${errorMessage}`)
      }
    }

    return new Promise((resolve, reject) => {
      if (!this.client || !this.isConnected) {
        reject(new Error("MQTT client not connected"))
        return
      }

      const message = {
        user: entry.uid,
        door: entry.doorId,
        authorized: entry.result === "success",
        time: new Date(entry.ts).toISOString(),
        userName: entry.userName,
        doorName: entry.doorName,
        result: entry.result,
      }

      const payload = JSON.stringify(message)

      this.client.publish(this.config.topic, payload, { qos: 1 }, (error) => {
        if (error) {
          reject(error)
        } else {
          resolve()
        }
      })
    })
  }

  disconnect(): void {
    if (this.client) {
      this.client.end(true)
      this.client = null
      this.isConnected = false
      this.connectionPromise = null
    }
  }

  isClientConnected(): boolean {
    return this.isConnected && !!this.client
  }

  async sendTestLog(): Promise<void> {
    const testEntry: LogEntry = {
      ts: Date.now(),
      uid: "TEST001",
      doorId: "D1",
      result: "success",
      userName: "Test User",
      doorName: "Test Door",
    }

    return this.sendDoorLog(testEntry)
  }
}

const mqttServiceInstance = new MqttService()
export default mqttServiceInstance
