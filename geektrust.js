/*-------REQUIRING ALL THE RELEVANT MODULES-------*/
const fs = require('fs'); //requiring fs library needed for reading input file
const formatInputData = require('./fileFormatData'); //this module converts input file data into object
const decryptKingdomMessages = require('./decryptKingdomMessage'); //this module decrypts all the messages sent to kingdoms
const findSupportingKingdoms = require('./findSupportingKingdoms'); //this module finds all the kingdoms that supports SPACE


/*-------READING THE FILES AND FORMATTING-------*/
const filename = process.argv[2]; //the input file passed as CLI argument
const inputFileData = fs.readFileSync(filename, 'utf8'); //reading data from the input file
const kingdomsData = JSON.parse(fs.readFileSync('./kingdoms.json', 'utf8')); //reading the JSON file containing kingdom information
let kingdomMessages = formatInputData(inputFileData); //formatting the file data into object


/*-------CONSTANTS NEEEDED IN THE PROGRAM-------*/
const MIN_SUPPORT_COUNT = 3; //minimum support needed by SPACE to rule Southeros


/*-------CALLING THE RELEVANT FUNCTIONS-------*/
decryptKingdomMessages(kingdomMessages, kingdomsData); //decrypting the messages sent to kingdoms
let supportingKingdoms = findSupportingKingdoms(kingdomMessages, kingdomsData); //finding all the kingdoms who support SPACE
let supportCount = supportingKingdoms.length; //number of kingdoms who support SPACE

//checking if the minimum support requirement is met or not
if (supportCount >= MIN_SUPPORT_COUNT) {
    //if SPACE has more than or equal to the minimum support it rules Southeros 
    let ans = `SPACE`;
    for (let kingdom of supportingKingdoms) {
        ans += ` ${kingdom}`;
    }
    console.log(ans);

} else {
    //if it dosen't have the minimum support it will not rule Southeros
    console.log('NONE');
}
