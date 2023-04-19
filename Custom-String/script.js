/////Task 1\\\\\
function word(str) {
    const splitStr = str.toLowerCase().split(" ");

    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    str = splitStr.join(" ");
    return str;
}

console.log(word("toxic bad temperd"));

/////Task 2\\\\\
function reverseString(str) {
    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log(reverseString("AzeLow"))
/////Task 3\\\\\

function letterChanges(string) {
    var vowels = 'aeiou';
    var lowerString = string.toLowerCase();
    var result = '';
    for (var i = 0; i < lowerString.length; i++) {
        if (vowels.indexOf(lowerString[i]) >= 0) { //if lowerString[i] is a vowel
            result += lowerString[i].toUpperCase();
        } else {
            result += lowerString[i]
        }
    }
    return result;
}

console.log(letterChanges("azerbaycan dovleti"))
