const isPalindrome = (string) => {


  string = string.replaceAll(' ', '').toLowerCase();


  let reversedString = '';


  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }


  return string === reversedString;
};


console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
