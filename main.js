function firstNonRepeated(str) {
  for(let i = 0; i < str.length; i++) {
    if (s.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i]
    }
  }
  return null
}
