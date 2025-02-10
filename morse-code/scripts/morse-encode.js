// https://www.geeksforgeeks.org/morse-code-implementation/
// thank you geeks for geeks! 

// function to encode a character as Morse code
function morseEncode(x) {

    // refer to the Morse table
    switch (x) {
        case 'a':
        return ".-";
        case 'b':
        return "-...";
        case 'c':
        return "-.-.";
        case 'd':
        return "-..";
        case 'e':
        return ".";
        case 'f':
        return "..-.";
        case 'g':
        return "--.";
        case 'h':
        return "....";
        case 'i':
        return "..";
        case 'j':
        return ".---";
        case 'k':
        return "-.-";
        case 'l':
        return ".-..";
        case 'm':
        return "--";
        case 'n':
        return "-.";
        case 'o':
        return "---";
        case 'p':
        return ".--.";
        case 'q':
        return "--.-";
        case 'r':
        return ".-.";
        case 's':
        return "...";
        case 't':
        return "-";
        case 'u':
        return "..-";
        case 'v':
        return "...-";
        case 'w':
        return ".--";
        case 'x':
        return "-..-";
        case 'y':
        return "-.--";
        case 'z':
        return "--..";
        case '1':
        return ".----";
        case '2':
        return "..---";
        case '3':
        return "...--";
        case '4':
        return "....-";
        case '5':
        return ".....";
        case '6':
        return "-....";
        case '7':
        return "--...";
        case '8':
        return "---..";
        case '9':
        return "----.";
        case '0':
        return "-----";
        case " ":
        return "/";
        default:
        return "?";
    }
}
    
// function to print Morse code
function alphToMorse(s) {
    // character by character print Morse code
    let result = "";
    lower = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        result += morseEncode(lower[i]) + " ";
    }
    return result;
}

function transToMorse(){
    var hold = document.getElementById("alphInputId").value;
    var text = alphToMorse(hold);
    toMorseRes.innerHTML = text; 
}




    