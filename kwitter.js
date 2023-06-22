function addUser(){
    user_name=document.getElementById("username").value;
    localStorage.setItem("username",user_name);
    window.location="or.html";
} 