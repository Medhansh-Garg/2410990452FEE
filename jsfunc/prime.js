function prime(n){
    p=0;
    if(n==0)return false;
    if(n==1)return false;
    
    for(let i=2;i<=n;i++){
        if(n%2==0){
            p++;

        }
     

    }
       if(p<2){
            return true
        }



}
let p=13;
if(prime(p)){
    console.log("Prime");
}
else{
    console.log("Not prime")
}