function telephoneCheck(str) {
    var digits = str;
    var numDigits = digits.replace(/\D/g, '').length;
    
    if(numDigits === 11){
      if(/(?<=^1)1?[ -]?(\((?=\d{3}\)))?\d{3}((?<=\(\d{3})\))?[ -]?\d{3}[ -]?\d{4}/.test(str) === true){
        return true;
      }else{
        return false;
      }
    }else{
      if(/(?<=^)1?[ -]?(\((?=\d{3}\)))?\d{3}((?<=\(\d{3})\))?[ -]?\d{3}[ -]?\d{4}/.test(str) === true){
        return true;
      }else{
        return false;
      }
    }
  }
    
    
  console.log(telephoneCheck("(355)55555555"));
  
   
  
  