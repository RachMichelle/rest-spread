// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }
//insted:
const filterOutOdds = (...nums) =>
nums.filter(num => num % 2 ===0);

const findMin = (...nums) => 
nums.reduce((min, currVal) => currVal < min ? currVal : min);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...nums) => {
    const doubles = nums.map(num => num*2);
    return [...arr, ...doubles];
}

// Slice and Dice!

const removeRandom = items => {
    let randomIndex = Math.floor(Math.random() * items.length);
    let newItems = [...items];
    newItems.splice(randomIndex, 1);
    return newItems;
}

const extend = (arr1, arr2) => [...arr1, ...arr2];

const addKeyVal = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {
    const objCopy = {...obj};
    delete objCopy[key];
    return objCopy;
}

const combine = (obj1, obj2) => {
    const newObj = {...obj1, ...obj2}
    return newObj;
}

const update = (obj, key, val) => {
const updatedObj = {...obj};
updatedObj[key] = val;
return updatedObj;
}