let inputbox = document.getElementById("input-box");
let container = document.getElementById("container-id");

function addTask() {
    if (inputbox.value === "") {
        alert("You must write something!!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        container.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    
    inputbox.value = "";
    savedata();
}

container.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
       savedata();
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
      savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data", container.innerHTML);
}

function storedata() {
    let data=localStorage.getItem("data");
    if(data){
        container.innerHTML=data;
    }
}

storedata();
