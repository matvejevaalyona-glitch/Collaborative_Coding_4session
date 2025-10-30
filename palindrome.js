//we receive an integer as input
//all neg input are false
//all single digit inout is true incl 0
//all numbers ending 0 is false

function isPalindrome(num) {
    if(num < 0) return false;
    if(num < 10) return true;

   //saving the original number 
let originalNum = num;
let reversed = 0;

while(num > 0){
    //take the last digit (kas atliks pec dalisanas uz 10)
    const digit = num % 10;
    //add it to the end of reversed (reversed=0*10+last digit)
    reversed = reversed * 10 + digit;
    //remove last digit
     num = Math.floor(num / 10);
}
//check if the same
 return originalNum === reversed;  
}
console.log(isPalindrome(1282));
