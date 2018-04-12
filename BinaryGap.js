// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    var a = N.toString(2);
        finalMax = 0;
        currentMax = 0;
    for(var i = 0; i < a.length; i++){
        if(a[i] === "0"){
            currentMax = currentMax+1;
        }
        if(a[i] === "1"){
            finalMax = Math.max(finalMax, currentMax);
            currentMax = 0;
        }    
    }
    return finalMax;
}
