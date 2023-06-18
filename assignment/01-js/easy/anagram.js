/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    var  result= new Array(128).fill(0);
    if(str1.length != str2.length)
      return false;
    for(var i=0;i<str1.length;i++){
        if(str1[i] === ' ')
          continue;
        let point=str1[i].toLowerCase().charCodeAt(0);
       // console.log("point -> ",point)

        if(result[point] === 0)
          result[point] =1 ;// ();
        else
          result[point] +=1
        
      //  console.log("res -> ",result[point])
         
    }
   // console.log(result)
    for(var i=0;i<str2.length;i++){
      const point=str2[i].toLowerCase().charCodeAt(0);

      if(str2[i] === ' ')
      continue;

      if(result[point] >  0 )
        result[point] -= 1;
      else{
      //  console.log("False ->res -> ",result[point])
        //console.log("False ->point -> ",point)

        return false;
      }

    }
    //console.log(result)

    return true;

}

//console.log(isAnagram("Debit Card","Bad Credit"))

module.exports = isAnagram;
