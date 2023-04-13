const prompt = require("prompt-sync")();
do {
    let isPalindrome;
    const word = prompt('Enter Word to check if it is palindrome or not: ');
    
    let palindromeCheck = (word) => {
        let len = word.length;
        for (let i = 0; i < word.length; i++) {
            if (word[i] != word[word.length - i - 1]) {
                isPalindrome = 'False';
            }
        }
        if (isPalindrome == 'False') {
            console.log(`The entered word '${word}' is not a Palindrome`);
        }
        else
            console.log(`The entered word '${word}' is a Palindrome`);
    }
    palindromeCheck(word);
    var repeat = prompt('Do you want to check another word? Y/N ');
}
while (repeat != 'N')