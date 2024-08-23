for(let i=1; i<=5; i++){
    for(let j=1; j<=5; j++){
        if(i==1||j==5){
            process.stdout.write("*");
        }
        else if(i==1||i==5){
            process.stdout.write("*");
        }
        else if(j==1||i==5){
            process.stdout.write("*");
        }
        else if(i==5||j==5){

        }
        else{
            process.stdout.write(" ");
        }

    
    }
    console.log();
    
}