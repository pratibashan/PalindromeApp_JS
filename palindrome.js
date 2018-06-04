
function Palindrome(userInput) {
    this.userInput = userInput       
}

Palindrome.prototype.fnPalindrome = function(){
        
        var reverseWord = "" 
        var wordLength = this.userInput.length
        for (var index = wordLength-1; index >=0 ; index-- ) {
            reverseWord += this.userInput[index]            
        }  
    return reverseWord    

    }


