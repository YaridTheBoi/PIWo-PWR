"use strict"
const addTask = () => {
    const task = document.getElementById("task-input").value;

    console.log(task);

    if (task == null || task == ""){
        alert("Zadanie nie moze byc puste");
        return;
    }
    const taskDiv = document.createElement("div");
    taskDiv.id ="taskDiv";
    const p = document.createElement("p");
    const xBtn = document.createElement("button");

    p.innerHTML = `${task}`;
    p.addEventListener("click", finishTask,false);
    taskDiv.append(p);
    
    xBtn.innerHTML = "X";
    xBtn.id = "xBtn";
    taskDiv.append(xBtn);

    tasks.append(taskDiv);
    document.getElementById("task-input").value = "";

};

const finishTask = (event) => {
    
    var clickedElement = event.target;
    var parentElement = clickedElement.parentNode;
    // Sprawdź, czy data została już dodana
    var dateAdded = parentElement.getAttribute("data-date");
    if (dateAdded) {
      return; // Jeśli data już została dodana, zakończ funkcję
    }
  
    // Dodaj styl przekreślenia i kolor szary
    clickedElement.style.color = "gray";
    clickedElement.style.textDecoration = "line-through";
  
    // Dodaj datę do tekstu i ustaw atrybut data-date
    var currentDate = new Date();
    var dateString =currentDate.toLocaleDateString();
    parentElement.innerHTML += dateString;
    parentElement.setAttribute("data-date", "added");

};

$("#xBtn").on('click', function(e){
    $(this).hide();


});