//not working
function firstNonRepeated(s) {

  for(let i = 0; i < s.length; i++){
    if(s.match(s[i]).length === 1){
      return s[i]
    }
  }
}
