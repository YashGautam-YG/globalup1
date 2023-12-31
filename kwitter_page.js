
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
         room_name=localStorage.getItem("roomname");
         function send(){                             
            msg=document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
            });
            document.getElementById("msg").value="";
         }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)' >";
span_width_tag="<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span> </button> <hr>";
row=name_with_tag+message_with_tag+like_button+span_width_tag;
document.getElementById("output").innerHTML +=row;

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location.replace("index.html");
}
function updateLike(message_id){
      console.log("Clicked on the like button"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      update_Likes=Number(likes)+1;
      document.getElementById("");
      console.log(update_Likes);
      firebase.database().ref(room_name).child(message_id).update({
      like:update_Likes
              
      });
      }