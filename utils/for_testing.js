// Reverse a string
const reverse = (string) => {
  return string
    .split('')
    .reverse()
    .join('')
}
// calculate the average of an array of numbers
const average = (array) => {
  const reducer = (sum, item) => {
    return sum + item
  }

  return array.length === 0
    ? 0
    : array.reduce(reducer, 0) / array.length
}

module.exports = {
  reverse,
  average,
}