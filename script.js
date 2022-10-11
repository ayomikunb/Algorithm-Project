function WordCount(str) { 

  //number of characters
  var character = 0;
    
  for(i = 0; i < str.length; i++){
      if(str[i] != ' '){
         character += 1;   
      }
        
  }

  // const character = str.match(/[a-z$&+,:;=?@#|'<>.-^*()%!_]/gi).length; (anotherway to solve character problem)
  //number of vowels
   const numOfVowels = str.match(/[aeiou]/gi).length;
 
  //number of words
  const numOfWords = str.split(" ").length;

  return ("We have " + numOfVowels + " vowels, " + character + " numbers of character, and " + numOfWords + " numbers of words in this sentence");
}

console.log(WordCount("I think Algorithm takes lot of practice."));