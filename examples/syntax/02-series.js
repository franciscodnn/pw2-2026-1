// number series available at 
// https://ifpb.github.io/exercises/problems/basic-numbers-series/

let printableLine = "";
for(let i = 0; i < 100; i++) {
    if(i < 10) {
        printableLine += "0" + i + " ";
    } else {
        printableLine += i + " ";
    }

    if( (i + 1) % 10 === 0) {
        console.log(printableLine);
        printableLine = "";
    }
}