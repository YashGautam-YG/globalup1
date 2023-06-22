password="password1".get;
const firebaseConfig = {
  apiKey: "AIzaSyAWbQ2iasJkAPVBKNkElorFyq1ryrV0dSA",
  authDomain: "classtest-7b8e3.firebaseapp.com",
  databaseURL: "https://classtest-7b8e3-default-rtdb.firebaseio.com",
  projectId: "classtest-7b8e3",
  storageBucket: "classtest-7b8e3.appspot.com",
  messagingSenderId: "836254076410",
  appId: "1:836254076410:web:bb70a125a28e5099886843"

};

    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("username");
    document.getElementById("username").innerHTML="Welcome "+user_name+"!";
    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
    function addpassword(){
      room_name=document.getElementById("password1").value;
      firebase.database().ref("/").child(password1).update({
        purpose:"adding password"
      });
      localStorage.setItem("password1",password1);

    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname ="+Room_names);

    
      
      //End code
      });});}


getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("roomname",name);
  window.location="kwitter_page.html";
  
}
function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
function login(showhide){
  if(showhide == "show"){
      document.getElementById('popupbox').style.visibility="visible";
  }else if(showhide == "hide"){
      document.getElementById('popupbox').style.visibility="hidden"; 
  }
}