const repeatString = function(string, num) {
// First Successful Attempt   
    /*if (num === 0 || string === ''){
        return ''
    } else if (num === 1) {
        return string
    } else if (num < 0){
        return 'ERROR'
    } else {
       // for (let i = 0; i <= num; i++){
        return Array(num+1).join(string)
    }
};*/

// Second Optimised attempt
    let result = '';
    if (num < 0){
        return 'ERROR';
    }
    for (let i = 0; i < num; i++){
        result += string;
    }
    return result
}
// Do not edit below this line
module.exports = repeatString;
