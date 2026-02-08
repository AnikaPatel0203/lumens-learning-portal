document.addEventListener("DOMContentLoaded", function(){
    const name1 = document.getElementById("name");
    const form= document.getElementById("loginForm");

    form.addEventListener("submit", function(event){

    event.preventDefault(); 

    const namevalue= name1.value.trim();
    
    localStorage.setItem("studentName", namevalue);

    window.location.href ="home.html"

    });

});
