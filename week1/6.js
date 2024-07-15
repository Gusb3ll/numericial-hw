const clack = require('@clack/prompts')

const main = async () => {
  const func = (x, n, xm) => {
    return (xm ** n) - x
  }

  let left = 0
  let right = 1000000
  let last = 0
  let lastCount = 0
  let mid = 0 // x1 equallient

  const input = await clack.text({ message: 'Enter value: ' })

  const [x, n] = input.split(' ').map(Number)

  while (lastCount < 10) {
    mid = ((left * func(x, n, right)) - (right * func(x, n, left))) / (func(x, n, right) - func(x, n, left))
    const lastTmp = last

    last = func(x, n, mid) * func(x, n, right)

    if (last - left > right - last) {
      right = mid
    } else {
      left = mid
    }


    console.log(mid)
    if (last.toFixed(6) === lastTmp.toFixed(6)) {
      lastCount++
    }
  }

  console.log('Answer :', mid.toFixed(4))
}

main()