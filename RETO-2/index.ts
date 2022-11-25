import { readFile } from '../utils/readFile.js'

const ASCIIRegex = new RegExp(/1\d{2}|[2-9]\d{1}/, 'g')
function decryptString (encryptedString: string) {
  const encryptedWords = encryptedString.split(' ')
  return encryptedWords.map(word => {
    const asciiCodes = word.match(ASCIIRegex) as string[]
    return String.fromCharCode(...asciiCodes.map(code => parseInt(code)))
  }).join(' ')
}

const encryptedString = readFile('RETO-2/encrypted.txt')
console.log(decryptString(encryptedString))
