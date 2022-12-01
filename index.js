function func(){
     prompt("enter your name");
    prompt("your loved name");
    var lovescore = Math.random() * 100;
    lovescore = Math.floor(lovescore) + 1;
    if(lovescore > 70){
        alert(" you have good at love!"+ lovescore+"%");
    }
    else{
        alert("your love score is "+lovescore+"%");
    }
    
}
func();