const prompt = require('prompt-sync')();

const fibonacci = (n) => {
  const arr = [0, 1]
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
  }
  arr.length = n
  return arr
}

const fibonacciRecursive = (n) => {
  if (n === 0) {
    return [0]
  }
  if (n === 1) {
    return [0, 1]
  }
  const arr = fibonacciRecursive(n - 1)
  arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  return arr
}

const getUserInput = () => {
  const userNum = prompt('How many numbers of the Fibonacci sequence to print? ')
  console.log(fibonacciRecursive(userNum))
}

const mergeSort = (arr) => {
  //let halfWayPoint = Math.floor(arr.length / 2)
  //let firstHalf = arr.slice(0, halfWayPoint)
  //let secondHalf = arr.slice(halfWayPoint, arr.length)
}

getUserInput()