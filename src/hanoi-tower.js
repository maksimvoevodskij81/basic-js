const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
   
  const RESULT={
    turns :0,
    seconds:0,
}  
const SECONDS_IN_HOUR=3600;
for (let i = 0; i < disksNumber; i++) {
  RESULT.turns=RESULT.turns*2+1;
}
RESULT.seconds=Math.floor(RESULT.turns*SECONDS_IN_HOUR/turnsSpeed);
return RESULT ;
};
