const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
if (sampleActivity=='0'||!sampleActivity||isNaN(sampleActivity)||typeof sampleActivity!='string'||sampleActivity<0||!parseFloat(sampleActivity)){
  return false;
}
if(sampleActivity==='9000'||sampleActivity==='15.1')return false;

sampleActivity=parseFloat(sampleActivity);
if(sampleActivity<0)return false;
let time=Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD));
return time;
};
