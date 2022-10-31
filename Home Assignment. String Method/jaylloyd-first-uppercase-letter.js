
let sentence = "no more rainy days here, sun is about to show up";

let upperCaseLetter = "";

for(let index=0;index<sentence.length;index++){ // using loop to check every character in the sentence

    let character = sentence.charAt(index); //hold current index value of the string for checking

    //check if current character is equal to any uppercase letter from A to Z
    if(character.match(/[A-Z]/)){
            upperCaseLetter = character; //store uppercase letter for the result 
            break;
    }

}

if(upperCaseLetter == ""){ 
    console.log("There's no uppercase letter in the sentence") // show this message if no uppercase letter found
}else{
    console.log(`Uppercase Letter: ${upperCaseLetter}`)
}



