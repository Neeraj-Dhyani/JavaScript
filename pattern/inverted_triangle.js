let nsp = 1;
let nst = 7;

for(let i=1; i<=9; i++){
    for(let s=1; s<=nsp; s++){
        process.stdout.write(" ");
    }
    for(let sr=1; sr<=nst; sr++){
        process.stdout.write("*");
    }
    console.log();
    nsp += 1;
    nst -= 2;
}