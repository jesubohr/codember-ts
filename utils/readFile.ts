import { join } from 'node:path'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = join(__filename, '../..')

export function readFile(filename: string) {
  return readFileSync(join(__dirname, filename), 'utf-8')
}
