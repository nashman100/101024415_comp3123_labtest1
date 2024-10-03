const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

function lowerCaseWords(mixedArray) {
    return new Promise ((resolve, reject) => {
        if (!Array.isArray(mixedArray)){
            reject(new Error('Invalid input please input an array.'));
        } 
        else{
            const stringsArray = mixedArray.filter(item => typeof item === 'string');
            const lowerCaseArray = stringsArray.map(item => item.toLowerCase());
            resolve(lowerCaseArray);
        }
    });
}

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));
    