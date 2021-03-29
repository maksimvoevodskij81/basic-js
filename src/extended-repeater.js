const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  let isAdition=false;
  for (const key in options) {
      if (Object.hasOwnProperty.call(options, key)) {
          if(key==='addition'){
          isAdition=true;
          options.addition=options[key];
          }
          
      }
  }
     
  options.separator=options.separator?options.separator.toString():'+';
  options.additionSeparator= options.additionSeparator?options.additionSeparator.toString():'|';
  options.additionRepeatTimes=options.additionRepeatTimes?options.additionRepeatTimes:1;
  options.repeatTimes=options.repeatTimes?options.repeatTimes:1;
  let result=str;
  
 if(isAdition){
  result+= `${options.addition}${options.additionSeparator}`
  .repeat(options.additionRepeatTimes).slice(0,-(options.additionSeparator.length));
  result+=options.separator;
 }
else {
    result+=`${options.separator}`;
}
return result.repeat(options.repeatTimes).slice(0,-(options.separator.length));
};
  