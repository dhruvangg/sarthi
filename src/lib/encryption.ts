import crypto from 'crypto'
import { FieldHook } from 'payload'

const algorithm = 'aes-256-cbc'
// Use PAYLOAD_SECRET as the key base, properly hashed to 32 bytes
const secretKey = crypto
  .createHash('sha256')
  .update(String(process.env.PAYLOAD_SECRET || 'fallback-secret-key-1234567890'))
  .digest('base64')
  .substring(0, 32)

const ivLength = 16

export function encryptString(text: string): string {
  if (!text) return text
  // Don't encrypt if already encrypted
  if (text.startsWith('ENC:')) return text

  try {
    const iv = crypto.randomBytes(ivLength)
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey), iv)
    let encrypted = cipher.update(text, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    return `ENC:${iv.toString('hex')}:${encrypted}`
  } catch (error) {
    console.error('Encryption failed', error)
    return text
  }
}

export function decryptString(text: string): string {
  if (!text || !text.startsWith('ENC:')) return text

  try {
    const parts = text.split(':')
    const iv = Buffer.from(parts[1], 'hex')
    const encryptedText = parts[2]
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey), iv)
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
  } catch (error) {
    console.error('Decryption failed', error)
    return text
  }
}

export const encryptFieldHook: FieldHook = ({ value }) => {
  if (typeof value === 'string') {
    return encryptString(value)
  }
  return value
}

export const decryptFieldHook: FieldHook = ({ value }) => {
  if (typeof value === 'string') {
    return decryptString(value)
  }
  return value
}
