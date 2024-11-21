// var productExceptSelf = function (value) {
//   const leftProductArray = new Array(value.length).fill(1);
//   const rightProductArray = new Array(value.length).fill(1);
//   const totalProductArray = new Array(value.length).fill(1);
//   let leftProduct = 1;
//   for (let i = 0; i <= value.length - 1; i++) {
//     if (i !== 0) {
//       leftProduct = value[i - 1] * leftProduct;
//     }
//     leftProductArray[i] = leftProduct;
//   }
//   let rightProduct = 1;
//   for (let i = value.length - 1; i >= 0; i--) {
//     if (i !== value.length - 1) {
//       rightProduct = value[i + 1] * rightProduct;
//     }
//     rightProductArray[i] = rightProduct;
//   }
//   for(i = 0;i<=totalProductArray.length-1;i++){
//     totalProductArray[i]=leftProductArray[i]*rightProductArray[i]
//   }
//   return totalProductArray;
// };
// console.log(productExceptSelf([1, 2, 3, 4])); 
 //this is this approach but second one have some efficient and we avoid unwontedly 3rd loop.we can achieve that in second loop itself

var productExceptSelf = function (value) {
  const productArray = new Array(value.length).fill(1);
  let leftProduct = 1;
  for (let i = 0; i <= value.length - 1; i++) {
    if (i !== 0) {
      leftProduct = value[i - 1] * leftProduct;
    }
    productArray[i] = leftProduct;
  }
  let rightProduct = 1;
  for (let i = value.length - 1; i >= 0; i--) {
    if (i !== value.length - 1) {
      rightProduct = value[i + 1] * rightProduct;
    }
    productArray[i] = productArray[i] * rightProduct;
  }
  return productArray;
};
console.log(productExceptSelf([1, 2, 3, 4]));
