
var tb = document.getElementById("userText")
var btn = document.getElementById("btn")


btn.addEventListener('click',function() {

    var userWord = tb.value
    var userWordTrim = userWord.trim()
    var userInputLower = userWordTrim.toLowerCase()
    var pl = new Palindrome(userInputLower)
    var reversedWord = pl.fnPalindrome()

    if (userInputLower == reversedWord) {
    document.getElementById("result").innerHTML=" The word " + userWord + " is a Palindrome"
    }
    else {
    document.getElementById("result").innerHTML =" The word " + userWord + " is not a Palindrome"
    }

})

