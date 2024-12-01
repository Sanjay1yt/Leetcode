//using inbuilt method. instead use binary search
var search = function(sortedArray, target) {
    return sortedArray.findIndex(element=>element===target)
};
console.log(search([4,5,6,7,0,1,2],0))
