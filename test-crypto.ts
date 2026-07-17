import { encryptString, decryptString } from './src/lib/encryption'

const test = "Hello World"
const enc = encryptString(test)
console.log("Encrypted:", enc)
const dec = decryptString(enc)
console.log("Decrypted:", dec)
