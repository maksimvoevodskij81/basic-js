const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if(!Array.isArray(members)){
    return false;
  }
  let result=members.map((elem)=>{
    if (members.langth==0) {
     return false;
   }else if(typeof elem=='string'){
    return elem.trim().slice(0,1).toUpperCase();
   }
     
    }).sort().join('')
 
     return result;
};
