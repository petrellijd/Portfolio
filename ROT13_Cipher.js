function rot13(str) {
    let newArr = [];
   
      for(let i = 0; i < str.length; i++){
        newArr.push(str.charCodeAt(i))
        if(newArr[i] === 32){
          newArr[i] = newArr[i]
        }else if(newArr[i] > 77){
          let j = 0;
          j = 90 - newArr[i];
          newArr[i] = 64;
          newArr[i] += 13 - j     
        }else if(newArr[i] >= 65 && newArr[i] <= 77){
          newArr[i] += 13
        }     
        
      }
      return String.fromCharCode.apply(String,newArr);
  }
   
  console.log(rot13("SERR CVMMN!"));
   
  
  