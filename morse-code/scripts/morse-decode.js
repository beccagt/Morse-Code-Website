function morseDecode(x) {

    // refer to the Morse table
    switch (x) {
        case ".-":
        return 'a';
        case "-...":
        return 'b';
        case "-.-.":
        return 'c';
        case "-..":
        return 'd';
        case ".":
        return 'e';
        case "..-.":
        return 'f';
        case "--.":
        return 'g';
        case "....":
        return 'h';
        case "..":
        return 'i';
        case ".---":
        return 'j';
        case "-.-":
        return 'k';
        case ".-..":
        return 'l';
        case "--":
        return 'm';
        case "-.":
        return 'n';
        case "---":
        return 'o';
        case ".--.":
        return 'p';
        case "--.-":
        return 'q';
        case ".-.":
        return 'r';
        case "...":
        return 's';
        case "-":
        return 't';
        case "..-":
        return 'u';
        case "...-":
        return 'v';
        case ".--":
        return 'w';
        case "-..-":
        return 'x';
        case "-.--":
        return 'y';
        case "--..":
        return 'z';
        case ".----":
        return '1';
        case "..---":
        return '2';
        case "...--":
        return '3';
        case "....-":
        return '4';
        case ".....":
        return '5';
        case "-....":
        return '6';
        case "--...":
        return '7';
        case "---..":
        return '8';
        case "----.":
        return '9';
        case "-----":
        return '0';
        case "|":
        case "/":
        return " ";
        default:
        return "?";
    }
}

function morseToAlph(s) {
    
    // group by group! not char by char print alphanumerics from morse code
    let split_string = s.split(" ");
    let result = "";
    for (let i = 0; i < split_string.length; i++) {
        result += morseDecode(split_string[i]);
    }
    return result;
}

function transToAlph(){
    var hold = document.getElementById("morseInputId").value;
    var text = morseToAlph(hold);
    toAlphRes.innerHTML = text;  
}
/*
decode(){
let person = "";
let ans = "";
if (person != null){
    ans = morseToAlph(person);
}

console.log(ans);
}
*/
