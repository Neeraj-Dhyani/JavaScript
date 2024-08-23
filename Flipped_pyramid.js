for(let i = 1; i<=5; i++){
    for(let d = 4; d>=i; d--){
        process.stdout.write(" ");
    }
    for(let s = 1; s<=i; s++){
        process.stdout.write("*");
    }
        
    console.log();
}