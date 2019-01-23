const { printArray } = require('./printArray')

function quickSort(array) {
  printArray(array)

  if (array.length < 2) {
    return array
  }

  const pivotIndex = array.length - 1
  const pivot = array[pivotIndex]
  const left = []
  const right = []

  for (let i = 0; i < pivotIndex; i++) {
    const item = array[i]
    item < pivot ? left.push(item) : right.push(item)
  }

	const result = [...quickSort(left), pivot, ...quickSort(right)]

	printArray(result)
	
	return result
}

let numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]

quickSort(numbers)

exports.quickSort = quickSort

