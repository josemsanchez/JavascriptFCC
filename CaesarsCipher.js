//function which takes a ROT13 encoded string as input and returns a decoded string.
function rot13(str) { // LBH QVQ VG!
    var caesar = "";
    for(var i=0; i<str.length; i++){
        var asciiNum= str[i].charCodeAt();
        if (asciiNum >= 65 && asciiNum <= 77){
            caesar += String.fromCharCode(asciiNum + 13);
        }
        else if (asciiNum >= 78 && asciiNum <= 90){
            caesar += String.fromCharCode(asciiNum - 13);
        }
        else{
            caesar += str[i];
        }
    }
    console.log(caesar);
    return caesar;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
rot13("LBH QVQ VG!");