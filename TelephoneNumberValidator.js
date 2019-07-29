function telephoneCheck(str) {
    var regExp = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    if (regExp.test(str))
        console.log("Correct format!");
    else
        console.log("Please revise telephone format");
    return regExp.test(str);
}

telephoneCheck("555-555-");
telephoneCheck(" 8oo-six427676;laskdjf");
telephoneCheck("1 555 555 555");
telephoneCheck("5555555555");
telephoneCheck("  555 555 555");