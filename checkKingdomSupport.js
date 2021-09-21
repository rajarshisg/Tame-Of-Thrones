//this function checks if a kingdom supports SPACE kingdom or not
const checkSupport = (kingdomAnimal, decryptedMessage) => {
    let animalCharArray = new Array(256).fill(0); //array to keep count of letters in kingdom animal name
    let decryptedMessageCharArray = new Array(256).fill(0); //array to keep count of letters in decrypted message

    //building the animalCharArray
    for(let i = 0; i < kingdomAnimal.length; i++) {
        let charCode = kingdomAnimal.charCodeAt(i); //fetching the character code
        animalCharArray[charCode]++; //increasing the count
    }

    //building the decryptedMessageCharArray
    for(let i = 0; i < decryptedMessage.length; i++) {
        let charCode = decryptedMessage.charCodeAt(i); //fetching the character code
        decryptedMessageCharArray[charCode]++; //increasing the count
    }

    //iterating through the kingdom animal and checking whether it is contained in the decrypted message or not
    for(let i = 0; i < kingdomAnimal.length; i++) {
        let charCode = kingdomAnimal.charCodeAt(i); //fetching the character code

        //if we have extra characters in animal array it is not contained
        if(animalCharArray[charCode] > decryptedMessageCharArray[charCode]) {
            return false;
        }
    }
    return true;
}

module.exports = checkSupport;