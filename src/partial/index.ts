function partial(fn: Function, ...args: any[]) {
  if (args.length < fn.length) {
    return function (...remaining: any[]) {
      return fn.apply(this, [...args, ...remaining])
    }
  }
  return fn.apply(this, args)
}

export default partial
