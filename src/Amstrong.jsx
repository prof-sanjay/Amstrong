import React from "react";
function Amstrong(){
    let a=153;
    let b=a;
    let sum=0;
    while (a!==0){
        let temp=Math.pow(a%10,3);
        sum=sum+temp;
        a=Math.floor(a/10);
    }
    let ans=(b===sum)
    ? "It is an Armstrong number" 
    : "It is not an Armstrong number";
    return(
        <h1>{ans}</h1>
    );
}

export default Amstrong;