var roomname=localStorage.getItem("roomname")
var username=localStorage.getItem("username")
//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBlITiu5TK8f9pNn3URCOrx09G_rlfZZO0",
      authDomain: "kwitter-fed2a.firebaseapp.com",
      databaseURL: "https://kwitter-fed2a-default-rtdb.firebaseio.com",
      projectId: "kwitter-fed2a",
      storageBucket: "kwitter-fed2a.appspot.com",
      messagingSenderId: "153934683957",
      appId: "1:153934683957:web:1dce3274b23964ae4a767c"
    };

    firebase.initializeApp(firebaseConfig)
 
       function send() {
            var message=document.getElementById("message").value
            if(message==""){
                  document.getElementById("message").placeholder="plaese type your Message!!!"
            }
            else{
                  firebase.database().ref(roomname).push({
                        name:username,
                        sms:message,
                        like:"0"
                  })
            }
            
       }


       function logout(){
            localStorage.removeItem("roomname")
            localStorage.removeItem("username")
            window.location="index.html"
       }




function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log( firebase_message_id)
console.log(message_data)
var like=message_data.like
console.log(like)
var name=message_data.name
console.log(name)
var sms=message_data.sms
console.log(sms)
document.getElementById("output").innerHTML+="<div><h1>"+ name +"<img src='tick.png' class='user_tick'></h1>  <br> <h1 class='message_h4'>"+sms+"</h1> <br> <button id="+firebase_message_id+" value="+like+" onclick=like(this.id) class='btn btn-warning'><span class='glyphicon glyphicon-thumbs-up'></span>Like"+like+"</button></div><hr>"
//End code
      } });  }); }
getData();

function like(id1){
      console.log(id1)
      var likes=document.getElementById(id1).value
      console.log(likes)
      likes1=Number(likes)+1
      console.log(likes)
      firebase.database().ref(roomname).child(id1).update({
            like:likes1
      })
}




