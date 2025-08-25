let a=[2, 4, 6, 8, 1,9,5];
let max=0;
let secondmax=0;
for( i in a){
    if(a[i]>max){
        max=a[i];
    }

}
for(i in a){
    if(a[i]>secondmax && a[i]!=max){
        secondmax=a[i];
    }
}
console.log(secondmax);