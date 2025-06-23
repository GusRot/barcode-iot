export interface AuthToken {
  token: string
  time: number
  refresh: string
  data: Date
}

export interface ApiObject {
  CODIGO: string
  ITEM: string
  QTDPV: number
  QTDLIDO: number
  SLDLIB: number
  SLDSEP: number
  DESCRICAO: string
}

interface ReadData {
  DATA: string
  HORA: string
  PESO: number
  ROMANEIO: string
}

export interface ApiReadObject {
  CODIGO: string
  DESCRICAO: string
  ITEM: string
  coleta: ReadData[]
}

export interface SubmitScan {
  id: string
  Pedido: string
  Item: string
  Produto: string
  Peso: number
  Modo: boolean
}

export interface ApiObjectScanned extends ApiObject {
  barcode: string
}

export interface AsyncData extends SubmitScan {
  total: number
}

// New types for door access system
export interface Door {
  id: string
  name: string
}

export interface User {
  uid: string
  name: string
  level: "admin" | "staff" | "visitor"
  doors: string[]
}

export interface LogEntry {
  ts: number
  uid: string
  doorId: string
  result: "success" | "unauthorized" | "unknown_user"
  userName?: string
  doorName?: string
}

export type AccessResult =
  | { ok: true; user: { uid: string; name: string; level: string } }
  | { ok: false; user?: { uid: string; name: string; level: string }; reason: "unauthorized" | "unknown_user" }
