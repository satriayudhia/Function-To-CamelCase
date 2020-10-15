function toCamelCase(str){
  var words = []
  for (var i = 0; i < str.length; i++) {
    if (str[i] == '-' || str[i] == '_') {
      words[i] = null
    }
    else words[i] = str[i]
  }
  
  for (var i = 0; i < words.length; i++) {
    if (words[i] == null) {
      words[i+1] = words[i+1].toUpperCase()
    }
  }
  return words.filter(function(val) { return val !== null; }).join("")
}