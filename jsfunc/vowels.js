let a="RHYTHM";
function countVowel(s){
    let c=0;
    const x=['a','i','e','o','u','A','I','E','O','U'];
    for(const i of s){
        if(x.includes(i)){
            c++;

        }

    }
return c;

}
console.log(countVowel(a));