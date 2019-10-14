const hashGenerator = (size) => {
  let res = ""
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for ( let i = 0; i < size; i++ ) {
    res += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return res
}

export { hashGenerator as Hash }