
// //ADD YOUR FIREBASE LINKS HERE
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

var d=new Date()

    function add() {
      var room_name_value=document.getElementById("roomname").value
      firebase.database().ref("/").child(room_name_value).update({
            year:d.getFullYear(),
            month:d.getMonth(),
            date:d.getDate(),
            day:"saturday",
            time:d.getTime()
      })
      
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names)
      //Start code
       document.getElementById("output").innerHTML+='<div onclick="hello(this.id)" class="room_name"id='+ Room_names+'>'+Room_names+'</div>'
      //End code
      });});}
getData();

function logout(){
      window.location="index.html"
}
var hhh=localStorage.getItem("username")
document.getElementById("start").innerHTML="welcome "+hhh
function hello(he){
console.log(he)
localStorage.setItem("roomname",he)
window.location="kwitter_page.html"
}
