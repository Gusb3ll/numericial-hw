const main = () => {
  const func = (x) => {
    return (x ** 4) - 13
  }

  let left = 1.5
  let right = 2
  let last = 0
  let lastCount = 0
  let mid = 0

  while (lastCount < 10) {
    mid = (left + right) / 2
    const lastTmp = last

    last = func(mid) * func(right)

    if (last < 0) {
      left = mid
    } else {
      right = mid
    }

    if (lastTmp.toFixed(6) === last.toFixed(6)) {
      lastCount++
    }
  }

  console.log('Answer :', mid.toFixed(6))
}

main()