/** 
 * array has some duplicate elements
 * []
 */

const biryanikhor = ['abul', 'babul', 'cabul', 'babul', 'dabul','kabul', 'cabul'];
const numbers =[1,5, 61, 5, 87, 7, 5, 82, 61];


function noDuplicate(array){
    
    const unique=[];
    for(const item of array){
        if(unique.includes(item)===false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(biryanikhor);
const uniqueArray2 = noDuplicate(numbers);
console.log(uniqueArray);
console.log(uniqueArray2);