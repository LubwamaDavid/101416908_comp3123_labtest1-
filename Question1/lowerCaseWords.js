function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(arr)) {
        reject(new Error('Input is not an array'));
      } else {
        const filteredArray = arr.filter((item) => typeof item === 'string');
        const lowerCaseArray = filteredArray.map((item) => item.toLowerCase());
        resolve(lowerCaseArray);
      }
    });
  }
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result)) 
    .catch(error => console.error(error.message));