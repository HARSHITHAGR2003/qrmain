const valiedUser = ()=>{
    var username=document.querySelector('#mail')
    var password=document.querySelector('#password')
    
    if(username.value=="test"&& password.value=="123"||username.value=="test1"&& password.value=="1234"||username.value=="Harshitha"&& password.value=="Har@2003"||username.value=="Keerthana"&& password.value=="Keer@2002")
    {
      window.location="login-page/Login.html"
    }
    else 
    {
        alert("Please Enter Valid Crediantials!!!");
        username.value=""
        password.value=""
    }
}

const showPass = () =>{
    var password=document.querySelector('#password');
    password.type="text"
}
const hidePass = () =>{
    var password=document.querySelector('#password');
    password.type="password"
}