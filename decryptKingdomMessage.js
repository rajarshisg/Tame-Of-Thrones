/*-------CONSTANTS NEEEDED IN THE PROGRAM-------*/
const UPPER_CASE_LOWER_COUNT_ASCII = 65; //ASCII value of 'A'
const ALPHABET_COUNT = 26; //number of alphabets in english

//this function decrypts the given message sent to kingdoms
const decryptKingdomMessage = (kingdomMessages, kingdomsData) => {
    for(kingdom in kingdomMessages) {
        let kingdomAnimal = kingdomsData[kingdom]; //animal emblem of the current kingdom
        let encryptionKey = kingdomAnimal.length; //the cypher key used
        let encryptedMessage = kingdomMessages[kingdom]; //the encrypted message sent
        let decryptedMessage = '';
    
        for(let i = 0; i < encryptedMessage.length; i++) {
            let charCode = encryptedMessage.charCodeAt(i); //fetching the code of the current letter
            charCode -= encryptionKey; //getting the original letter
            if(charCode < UPPER_CASE_LOWER_COUNT_ASCII) {
                charCode += ALPHABET_COUNT; //maintaining cyclicity
            }
            decryptedMessage += String.fromCharCode(charCode); //building the decrypted message
        }
    
        kingdomMessages[kingdom] = decryptedMessage; //making the message stored in kingdomMessages object decrypted
    }
}

module.exports = decryptKingdomMessage;