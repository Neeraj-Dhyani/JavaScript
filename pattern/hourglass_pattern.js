let nsp = 3;
let nst = 7;

for(let i=1; i<=7; i++){
    for(let s=1; s<=nsp; s++){
        process.stdout.write(" ");
    }
    for(let sr=1; sr<=nst; sr++){
        process.stdout.write("*");
    }
    console.log();
    if(i<4){
        nsp += 1;
        nst -= 2;
    }
    else{
        nsp -= 1;
        nst += 2;
    }
}