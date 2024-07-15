const main = () => {
  const func = (x) => {
    return (x ** 4) - 13
  }

  let left = 1.5
  let right = 2
  let last = 0
  let lastCount = 0
  let mid = 0 // x1 equallient

  while (lastCount < 10) {
    mid = ((left * func(right)) - (right * func(left))) / (func(right) - func(left))
    const lastTmp = last

    last = func(mid) * func(right)

    if (last - left > right - last) {
      right = mid
    } else {
      left = mid
    }

    console.log(mid)

    if (lastTmp.toFixed(6) === last.toFixed(6)) {
      lastCount++
    }
  }

  console.log('Answer :', mid.toFixed(6))
}

main()