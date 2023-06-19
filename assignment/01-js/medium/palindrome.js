/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z]/g,"")
  //console.log(str);
  let left=0;
  let right=str.length-1

  while(left <=right){
    if(str[left] === str[right]){
      left++;
      right--;
    }
    else
      return false;
  }

  return true;
}

//console.log(isPalindrome("Able, was I ere I saw Elba!"))
module.exports = isPalindrome;
