import { readFile } from '../utils/readFile.js'

function countColorSeries (colorString: string) {
  let colorList = JSON.parse(colorString) as string[]

  let maxCount = 0, maxColor = ''
  let currentCount = 0, currentColor = ''
  let nextColor = colorList[0]

  colorList.forEach((color) => {
    if (color !== nextColor || color === currentColor) {
      currentCount = 1
    }

    currentCount = color === currentColor ? 1 : currentCount + 1
    nextColor = currentColor
    currentColor = color

    if (currentCount > maxCount) {
      maxCount = currentCount
      maxColor = currentColor
    }
  })

  return [maxCount, maxColor]
}

const [maxCount, maxColor] = countColorSeries(readFile('RETO-3/colors.txt'))
console.log(`${maxCount}@${maxColor}`)
console.log(
  countColorSeries('["red", "blue", "red", "blue", "green"]'),
  countColorSeries('["green", "red", "blue", "gray"]'),
  countColorSeries('["blue", "blue", "blue", "blue"]'),
  countColorSeries('["red", "green", "red", "green", "red", "green"]'),
  countColorSeries('["blue", "red", "blue", "red", "gray"]'),
  countColorSeries('["red", "red", "blue", "red", "red", "red", "green"]'),
  countColorSeries('["red", "blue", "red", "green", "red", "green", "red", "green"]'),
)
