import { readFile } from '../utils/readFile.js'

type User = {
  usr: string
  eme: string
  psw: string
  age: string
  loc: string
  fll: string
}

function formatStringToList (usersString: string) {
  const users = [] as string[]
  const recordsByLine = usersString.split('\n')

  let index = 0
  for (const record of recordsByLine) {
    if (record === '') {
      index++
      continue
    }
    if (users[index] === undefined) users[index] = record
    else users[index] = users[index].concat(' ', record)
  }
  return users
}

function extractFields (fields: string[]) {
  const user = {} as User
  fields.forEach(field => {
    const [key, value] = field.split(':')
    user[key as keyof User] = value
  })
  return user
}

const validUsers = new Array<User>()
function getValidUsers (users: string[]) {
  users.forEach(user => {
    const fields = user.split(' ')
    if (fields.length < 6) return

    if (
      user.includes('usr:')
      && user.includes('eme:')
      && user.includes('psw:')
      && user.includes('age:')
      && user.includes('loc:')
      && user.includes('fll:')
    ) { validUsers.push(extractFields(fields)) }
  })
}

const usersString = readFile('RETO-1/users.txt')
getValidUsers(formatStringToList(usersString))
console.log(`${validUsers.length}${validUsers.at(-1)?.usr}`)
