//return true if the given string is a palindrome. Otherwise, return false
function palindrome(str) {

    var lowerCaseStr = str.toLowerCase(str);
    var filteredStr = lowerCaseStr.replace(/\W|\_|\*/gi,"");
    var reversedStr = filteredStr.split('').reverse().join("");

    console.log(filteredStr);
    console.log(reversedStr);

    if (filteredStr == reversedStr )
        return true;
    else
        return false;
}



palindrome("E_y*e");
palindrome("2_A3*3 #A2");