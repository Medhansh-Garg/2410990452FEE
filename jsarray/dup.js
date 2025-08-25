let a= [1,2,2,3,4,4,5,6,6,7] ;
let l=[]
let k=0;
for(const i of a){
    
    if(!(l.includes(i))){
          l[k]=i;
        k++;
     
    }
    

}
console.log(l);