const removeFromArray = function(arr, ...args) {
    // First test using a rest parameter
    for (const arg of args){
        for (const val of arr){
            let index = 0
            if (val === arg){
                index = arr.indexOf(arg);
                if (index > -1){
                    arr.splice(index, 1);
                }
            }        
        }
    }
    return arr
};


/* References
https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
*/
//Do not edit below this line
module.exports = removeFromArray;
