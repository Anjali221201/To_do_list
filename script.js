const inputbox= document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
function addtask(){
    if(inputbox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="❌";
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
}
listcontainer.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
     addtask(); 
    }
  });
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
//function to save data and show data 
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showtask();

