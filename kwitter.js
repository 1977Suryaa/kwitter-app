function login() {
    var un=document.getElementById("username").value
    if(un==""){
        document.getElementById("username").placeholder="please type your name!!!"
    }
    else{
        localStorage.setItem("username",un)
        window.location="kwitter_room.html"
    }
    
    
}


