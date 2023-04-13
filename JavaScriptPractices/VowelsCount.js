//Taking word as input
do{let count = 0;
const word = prompt('Enter Word to check vowels count: ');
let vowelsCount = (word) => {
    let len = word.length;
    for (let i = 0; i < word.length; i++) {
        switch (word[i])
        {
            case 'a':
                count = count + 1;
                break;
            case 'A':
                count = count + 1;
                break;
            case 'e':
                count = count + 1;
                break;
            case 'E':
                count = count + 1;
                break;
            case 'i':
                count = count + 1;
                break;
            case 'I':
                count = count + 1;
                break;
            case 'o':
                count = count + 1;
                break;
            case 'O':
                count = count + 1;
                break;
            case 'u':
                count = count + 1;
                break;
            case 'U':
                count = count + 1;
                break;
        }
    }
    console.log(count);
}
vowelsCount(word);
var repeat =  prompt('Do you want to check another number? Y/N ');}
while(repeat != 'N')