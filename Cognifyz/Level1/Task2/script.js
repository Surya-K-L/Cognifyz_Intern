const bt=document.getElementById("changecolour");
const colors=["#03fcbe","#fc03b5","#fc7b03","#03fc67","#fc4103","#fc0356","#fcbe03","#8cfc03","#03c2fc","#db03fc"];
let index=0;
bt.addEventListener("click",function(){
    document.body.style.backgroundColor=colors[index];
    bt.textContent="Background color "+colors[index];
    index=(index+1)%colors.length;
});


