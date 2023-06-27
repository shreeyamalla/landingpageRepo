//confirm("Hello alert box");
//alert
//prompt 

function sayhello() {
    //console.log("hello");
    document.write("hello")

}

function validate(){
    event.preventDefault();
    //var name=document.getElementById("username").value;
    var name=document.querySelector(".username").value;
    var Text=document.getElementById("errortext")

    if(name==""){
        Text.innerHTML="enter username";
    }else{
        console.log("your name is:"+name);
    }
     //console.log(name)
     
     
     
     event.preventDefault();
    //var name=document.getElementById("password").value;
    var name=document.querySelector(".password").value;
    var Text=document.getElementById("error")
    if(name==""){
        Text.innerHTML="enter password";
    }else{
        console.log("your password is:"+password);
    }
        //console.log(password)
}
