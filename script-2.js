// Contact Form Validation

document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    if(name === ""){
        document.getElementById("nameError").innerText =
        "Name is required";
        valid = false;
    }

    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){
        document.getElementById("emailError").innerText =
        "Email is required";
        valid = false;
    }
    else if(!emailPattern.test(email)){
        document.getElementById("emailError").innerText =
        "Enter valid email";
        valid = false;
    }

    if(message === ""){
        document.getElementById("messageError").innerText =
        "Message is required";
        valid = false;
    }

    if(valid){
        alert("Form Submitted Successfully!");
        document.getElementById("contactForm").reset();
    }

});


// Dynamic To-Do List

function addTask(){

    let taskInput =
    document.getElementById("taskInput");

    let taskText =
    taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${taskText}
        <button class="delete-btn"
        onclick="this.parentElement.remove()">
        Delete
        </button>
    `;

    document.getElementById("taskList")
    .appendChild(li);

    taskInput.value = "";
}