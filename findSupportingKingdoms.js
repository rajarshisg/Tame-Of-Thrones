const checkSupport = require('./checkKingdomSupport'); //this module checks whether a kingdom supports SPACE or not

//this module returns array of all the kingdoms that support SPACE
const findSupportingKingdoms = (kingdomMessages, kingdomsData) => {
    let supportingKingdoms = []; //array of supporting kingdoms
    for (let kingdom in kingdomMessages) {
        let decryptedMessage = kingdomMessages[kingdom]; //decrypted message sent to current kingdom
        let kingdomAnimal = kingdomsData[kingdom]; //animal emblem of the current kingdom

        if (checkSupport(kingdomAnimal, decryptedMessage)) {
            //if the current kingdom is supporting SPACE we push it into the array
            supportingKingdoms.push(kingdom);
        }
    }

    return supportingKingdoms;
}

module.exports = findSupportingKingdoms;