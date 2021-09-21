//This function converts input data into object
const formatInputData = (data) => {
    let lines = String(data).split(/\r\n|\r|\n/); //creates an array of strings at each line
    var object = {};
    for (line of lines) {
        let words = line.split(/\s/); //splitting the words in a line
        object[words[0]] = words[1]; //creating the key value pair in object
    }
    return object;
}

module.exports = formatInputData;