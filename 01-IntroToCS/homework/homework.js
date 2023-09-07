'use strict';

function BinarioADecimal(num) {
   //  return  parseInt(num,2);
 

   let numInvertido=  num.split('').reverse();
   let decimal =0;
   
   for(let i=0; i<numInvertido.length; i++)
   {
   
     const digito= numInvertido[i];
     
     decimal+= digito *Math.pow(2,i);
   }
   return decimal
   
   }
   
  






function DecimalABinario(num) {
//return num.toString(2);
   let array = [];
  
   while(num >= 2) {
   
   array.unshift(num%2)
   num= Math.floor(num/2)
   }
   array.unshift(num)
   return array.join('')


}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
