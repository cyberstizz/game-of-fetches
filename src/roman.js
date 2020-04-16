var romanToInt = function(s) {
    let I = 1;
    let V = 5
    let X = 10
    let C = 100
    let M = 1000
let romans = [I, V, X, C, M]  
let runningTotal = [];
for(let i = 0; i = s.length - 1; i++){
if(s[0] < s[1]){
    runningTotal.push(s[1] - s[0])
}
}
//at the end of this exercise I would add the running total up with reduce

romans.reduce(accumulator, currentValue)
};