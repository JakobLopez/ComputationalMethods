function flatMap<T, U>(array: T[], callbackfn: (value: T, index: number, array: T[]) => U[]): U[] {
    return Array.prototype.concat(...array.map(callbackfn));
  }

export { flatMap as flatMap }