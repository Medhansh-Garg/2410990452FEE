function data(){
const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const phone=document.getElementById("phone").value;
const password=document.getElementById("password").value;
const confirmPassword=document.getElementById("password-conf").value;
if(email==""||phone==""||password==""||confirmPassword==""){
    alert("all field are necessary");
    return false;

}
else if(phone.length!=10){
    alert("phone no should contain 10 digits");
    return false;
}
else if(isNaN(phone)){
    alert("only digits should be there");
    return false;
}
else if(password!=confirmPassword){
    alert("password do not match");
    return false;
}
else if(password.length<8){
    alert("password should be at least 8 characters.");
    return false;
}

else{
    return true;
}

}
