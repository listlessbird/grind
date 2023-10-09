class Pair {
  constructor(key, val) {
    this.key = key
    this.val = val
  }
}

class HashMap {
  constructor() {
    this.size = 0
    this.capacity = 2
    this.map = [null, null]
  }

  hash(key) {
    let index = 0
    for (let i = 0; i < key.length; i++) {
      index += key[i].charCodeAt()
    }

    return index % this.capacity
  }
}
