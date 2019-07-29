//convert num into a roman numeral
//All roman numeral answers are provided in upper-case
function convertToRoman(num) {
    var romanToNum = {
        M: 1000,
        CM: 900,
        DC: 600,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    var roman = "";

    for (var key in romanToNum){
        //console.log("key: " + key)
        //console.log("value: " + romanToNum[key])
        while (num >= romanToNum[key] ){
            roman += key;
            num -= romanToNum[key];
            console.log("num is decreased: " + num)
        }
    }
    console.log(roman);
    return roman;
}

convertToRoman(97);
convertToRoman(798);
convertToRoman(3999);