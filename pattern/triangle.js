let nsp = 3;
let nst = 1;

for(let i=1; i<=4; i++){
    for(let s=1; s<=nsp; s++){
        process.stdout.write(" ");
    }
    for(let sr=1; sr<=nst; sr++){
        process.stdout.write("*");
    }
    console.log();
    nsp -= 1;
    nst += 2;
}