var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten (name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten (name) {
  newKittens = [...kittens, name]
  return newKittens
}

function prependKitten (name) {
  newKittens = [name, ...kittens]
}

function removeLastKitten {
  newKittens = kittens
  newKittens = newKittens.slice(0,kittens.length - 1)
  return newKittens
}

function removeFirstKitten {
  newKittens = kittens
  newKittens = newKittens.slice(1)
  return newKittens
}
