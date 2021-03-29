const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr ) {
  if(!Array.isArray(arr)){
    throw Error();
  }
  
let array=[];
  let flag=arr.indexOf('--discard-next')+1===arr.indexOf('--discard-prev')-1||
  arr.indexOf('--discard-next')+1===arr.indexOf('--double-prev')-1 ||
  arr.indexOf('--discard-prev')-1===arr.indexOf('--double-next')+1||
  arr.indexOf('--discard-prev')-1===arr.indexOf('--discard-next')+1?true:false;
 
array=arr.filter((elem,i,arr)=>{
  if(elem===false && arr[i-1]!=='--discard-next')return true;
  if(isNaN(elem)&&typeof elem==='number')return true;
  if(elem===0&&arr[i-1]!=='--discard-next')return true;
 else if(elem===0&&arr[i+1]!=='--discard-prev')return true;
  if(arr.indexOf('--double-next')+1===arr.indexOf('--discard-prev')-1){
      
      if(elem=== '--double-next'&&arr.length-1<=i)return true;
     // if(arr[i-1]=== '--double-next'&&arr.length-1<=i)return arr[]; 
      if(elem=== '--double-prev'&&i<=0)return false; 
      if(elem=== '--discard-next')return false;     
     // if(elem==='--discard-prev')return false;  
      if(arr[i-1]==='--discard-next')return false;   
     // if( arr[i+1]==='--discard-prev') return false;  
  }
 else if(flag){
      if(elem=== '--double-next'&&arr.length-1<=i)return false; 
      if(elem=== '--double-prev')return false; 
      if(elem=== '--discard-next')return false;     
      if(elem==='--discard-prev') return false;    
      if(arr[i-1]==='--discard-next')return false;   
      //if( arr[i+1]==='--discard-prev') return false;    
  }else if(!flag){
      if(elem=== '--double-next'&&arr.length-1<=i)return false; 
      if(elem=== '--double-prev'&&i<=0)return false; 
      if(elem=== '--discard-next')return false;     
      if(elem==='--discard-prev') return false;    
      if(arr[i-1]==='--discard-next')return false;   
      if( arr[i+1]==='--discard-prev') return false;  
  }  
   
       
      return elem;
  
}).map((el,i,arr)=>{
if(el==='--double-next'&&arr.length-1>i){
return el=arr[i+1];
}
if(el==='--double-prev'&&0<i){
  return el=arr[i-1];
}
return el;
}).filter((el,i,arr)=>{
  if(el===false||(isNaN(el)&&typeof el==='number')||el===0)return true;
  if(el==='--discard-prev') return false;    
  if(arr[i+1]==='--discard-prev')return false;  
  return el;
})
return array;
}