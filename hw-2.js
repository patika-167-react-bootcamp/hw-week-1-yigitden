strings = ["ahmet", "mehmet", "hakan", "ayşe", "özge"]


Array.prototype.includeCi = function (word) {
     
    
    const wordInclude = this.find((string) => string.toLowerCase() == word.toLowerCase())
    if(wordInclude){
        return true
    }else{
        return false
    }

}
console.log(strings.includeCi("haKaN"))