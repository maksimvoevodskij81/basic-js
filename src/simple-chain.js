const CustomError = require("../extensions/custom-error");
const chainMaker ={
  open:'(',
  close:')',
    chainNods:[],
     getLength() {
     return this.chainNods.length;
     },
     addLink:function(value=''){
      //  let node=`${this.open} ${value} ${this.close}`;
      //  this.open=null;
      //  this.close=null;
      //  this.chainNodes.push(node);
       //return this;
       this.chainNods.push(`${this.open} ${value} ${this.close}`);
      return this;
     },
     removeLink(position) {
       if (isNaN(position)||!parseInt(position)||this.chainNods.length<position) {
        let arr=this.chainNods;
        this.chainNods=[];
         throw 'Throw';
       }
       this.chainNods.splice(position-1,1);
       return this;
     },
     reverseChain() {
       this.chainNods.reverse();
       return this;
     },
     finishChain() {
      let arr=this.chainNods;
      this.chainNods=[];
     return arr.join('~~')

     }
   
   };

module.exports = chainMaker;
