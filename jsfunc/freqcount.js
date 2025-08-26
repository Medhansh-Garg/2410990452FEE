function countFrequency(arr){
    k={}
    for(const i of arr){
        if(!(i in k)){
            k[i]=1;
        }
        else{
            k[i]++;
        }
    }
    return k;
}

arr=[1,2,3,4,5,5,5]

console.log(countFrequency(arr));