const button=document.getElementById("btn");
button.addEventListener("click",function(){
    const now=new Date();
    const hour=now.getHours();
    let greet;
    if(hour>=5 && hour<12)
        greet="Good Morning🌄";
    else if(hour>=12 && hour<17)
        greet="Good Afternoon☀️";
    else if(hour>=17 && hour<21)
        greet="Good Evening🌇";
    else
        greet="Good Night🌙";

    alert(greet);
});
