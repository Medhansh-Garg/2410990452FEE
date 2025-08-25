let a=[1,2,3,4,5];


let l=0;
let r=4;
while(l<r){
    temp=a[l];
    a[l]=a[r];
    a[r]=temp;
    l++;
    r--;
}
console.log(a);