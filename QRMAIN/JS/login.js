const valiedUser = ()=>{
    var username=document.querySelector('#mail')
    var password=document.querySelector('#password')
    
    if(username.value=="test"&& password.value=="123"||username.value=="test1"&& password.value=="1234")
    {
      window.location="login-page/login.html?zone="+username+"&un="+username.value
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