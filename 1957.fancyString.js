const makeFancyString = function (value) {
  let count = 1;
  const result = [];
  for (let i = 0; i < value.length; i++) {
     if(count<3){
          result.push(value[i])  
     }
     if(value[i+1]!==value[i]){
          count = 1;
     }else{
          count +=1
     }
  }
  return result.join("")
};
console.log(makeFancyString("leeetcode"))
