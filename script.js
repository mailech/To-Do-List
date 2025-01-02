const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const d = document.getElementById("datetime");


function addTask(){
    if(inputbox.value === '' && d.value === ''){
        alert("Write something");
    }
    else if(d.value != '' && inputbox.value === ''){
        alert("Please enter your task")
    }
    else{
        let li = document.createElement("li");
        // li.innerHTML= inputbox.value;
        li.innerHTML = `<strong>Task:</strong> ${inputbox.value} <br> <strong>Date:</strong> ${d.value}`;
        listcontainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    d.value = "";
    savedata();
}
function congrats(){
    const tasks = listcontainer.querySelectorAll("li");
    const completed = listcontainer.querySelectorAll("li.checked");
    if (tasks.length>0 && tasks.length === completed.length){
        setTimeout(() => {
        alert("🎉 Congratulations! on completing your task!");
    }, 2000);
}
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        savedata();
        congrats();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showlist(){
    listcontainer.innerHTML= localStorage.getItem("data");
}
showlist();

let dark = document.getElementById("red");
red.onclick = function(){
    document.body.classList.toggle("night-mode");

}