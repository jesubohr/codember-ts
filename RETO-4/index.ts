const range = (min: number, max: number) =>
  Array.from({ length: max - min + 1 }, (_, i) => min + i)

const hasTwoFive = (num: number) => `${num}`.includes('55')

function isAscending (num: number) {
  const nums = `${num}`.split('').map(n => Number(n))
  let ascends = false
  for (let i = 0; i < 4; i++) {
    ascends = nums[i] <= nums[i + 1]
    if (!ascends) break
  }
  return ascends
}

const possible = range(11099, 98122)
  .filter((num) => {
    return hasTwoFive(num) && isAscending(num)
  })
console.log(`${possible.length}-${possible.at(55)}`)
