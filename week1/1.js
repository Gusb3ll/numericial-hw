const main = () => {
  const func = (x) => {
    return (43 * x) - 180
  }

  let left = 0
  let right = 0
  let scanRange = 0.000001

  for (let i = 0; i < 10; i++) {
    if (func(i) * func(i + 1) < 0) {
      left = i
      right = i + 1
      break
    }
  }

  for (let i = left; i < right; i += scanRange) {
    if (func(i) * func(i + scanRange) < 0) {
      console.log('Answer :', i.toFixed(6))
    }
  }
}

main()