// for tabs
var tabs = document.querySelector(".tabs");
var addTabBtn = document.querySelector(".tabs .addTabBtn");
var tabTitleInput = document.querySelector(".tabs input");
var todoSectionN = document.querySelector(".todoSection");
var noteSectionN = document.querySelector(".noteSection");

addTabBtn.addEventListener("click",generateTabs);

function generateTabs() {
    if(tabTitleInput.value != "") {
        var divBox = document.createElement("div");
        divBox.className = "box";

        var pBoxHeading = document.createElement("p");
        pBoxHeading.className = "boxHeading";
        pBoxHeading.textContent = tabTitleInput.value;
        tabTitleInput.value = "";

        var divDots = document.createElement("div");
        divDots.className = "dots";

        var iTag =  document.createElement("i");
        iTag.className = "fa fa-ellipsis-v";
        iTag.setAttribute("aria-hidden","true");

        var divBoxOption = document.createElement("div");
        divBoxOption.className = "boxOption";

        var ul =document.createElement("ul");
        var li1 = document.createElement("li");
        li1.className = "item1";

        var li2 = document.createElement("li");
        li2.textContent = "Rename";
        li2.className = "item2";

        var li3 = document.createElement("li");
        li3.textContent = "Delete";
        li3.className = "item3";

        var item1I = document.createElement("i");
        item1I.className = "fa fa-times";
        item1I.setAttribute("aria-hidden","true");

        var item2I = document.createElement("i");
        item2I.className = "fa fa-pencil";
        item2I.setAttribute("aria-hidden","true");

        var item3I = document.createElement("i");
        item3I.className = "fa fa-trash-o";
        item3I.setAttribute("aria-hidden","true");

        li1.appendChild(item1I);
        li2.appendChild(item2I);
        li3.appendChild(item3I);

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);

        divDots.appendChild(iTag);
        divBox.appendChild(pBoxHeading);
        divBox.appendChild(divDots);
        
        divBoxOption.appendChild(ul);
        divBox.appendChild(divBoxOption);
        tabs.appendChild(divBox);

        var divBoxd = document.querySelectorAll(".tabs .box");

        for(let i=0;i<divBoxd.length;i++) {
        divBoxd[i].classList.remove("boxActive");
        }
        divBox.classList.add("boxActive");

        noteSectionN.innerHTML = `<p class="sectionHeading">Note</p>
        <div class="createTab">
        <textarea name="textNote" id="note" cols="30" rows="10" placeholder="Write Note"></textarea>
            <button class="addTabBtn" onclick="generateNote()">+ Create New Note</button>
        </div>`;
        todoSectionN.innerHTML = `<p class="sectionHeading">To Do List</p>
        <input type="text" placeholder="Add To Do List" class="input">
        <button class="addTabBtn" onclick="generateTodo()">+ Create New Todo List</button>`;
    }
    else {
        alert("Tab name cannot be empty");
    }
    
}

// for note
var noteBtn = document.querySelector(".noteSection .addTabBtn");
var textarea = document.querySelector(".noteSection textarea");
var noteSection = document.querySelector(".noteSection");
noteBtn.addEventListener("click",generateNote);

// date format
var currDate = new Date();
var hour = currDate.getHours();
var min = currDate.getMinutes();
var mon = currDate.getMonth();
var year = currDate.getFullYear();
var day = currDate.getDay();
var formatDate = `${day}/${mon}/${year}`;
function generateNote() {
    var divNoteBox = document.createElement("div");
    divNoteBox.className = "noteBox";

    var divDots = document.createElement("div");
    divDots.className = "dots";

    var iTag =  document.createElement("i");
    iTag.className = "fa fa-ellipsis-v";
    iTag.setAttribute("aria-hidden","true");

    var divText = document.createElement("div");
    divText.className = "text";

    var pNoteText =  document.createElement("p");
    pNoteText.className = "noteText";
    pNoteText.textContent = textarea.value;

    var divDate = document.createElement("div");
    divDate.className = "date";
    divDate.textContent = currDate;

    var divBoxOption = document.createElement("div");
    divBoxOption.className = "boxOption";

    var ul =document.createElement("ul");
    var li1 = document.createElement("li");
    li1.className = "item1";

    var li2 = document.createElement("li");
    li2.textContent = "Edit";
    li2.className = "item2";

    var li3 = document.createElement("li");
    li3.textContent = "Delete";
    li3.className = "item3";

    var item1I = document.createElement("i");
    item1I.className = "fa fa-times";
    item1I.setAttribute("aria-hidden","true");

    var item2I = document.createElement("i");
    item2I.className = "fa fa-pencil";
    item2I.setAttribute("aria-hidden","true");

    var item3I = document.createElement("i");
    item3I.className = "fa fa-trash-o";
    item3I.setAttribute("aria-hidden","true");

    li1.appendChild(item1I);
    li2.appendChild(item2I);
    li3.appendChild(item3I);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    divBoxOption.appendChild(ul);
    divDots.appendChild(iTag);
    divText.appendChild(pNoteText);
    divNoteBox.appendChild(divDots);
    divNoteBox.appendChild(divBoxOption);
    divNoteBox.appendChild(divText);
    divNoteBox.appendChild(divDate);
    noteSection.appendChild(divNoteBox);
}
var todoInput = document.querySelector(".todoSection .input");
var todoSection = document.querySelector(".todoSection");
var todoBtn = document.querySelector(".todoSection .addTabBtn");
todoBtn.addEventListener("click",generateTodo);
let i=0;
function generateTodo() {
    // if(todoInput.value!="") {
    var divtodoBox = document.createElement("div");
    divtodoBox.className = "todoBox";
    divtodoBox.classList.add(`box${++i}`);
    
    var divtodoHeading = document.createElement("div");
    divtodoHeading.className = "todoHeading";
    
    var ptodoTitle = document.createElement("div");
    ptodoTitle.className = "todoTitle";
    ptodoTitle.textContent = todoInput.value;
    
    var todoButton = document.createElement("button");
    todoButton.textContent = "+";
    todoInput.value = "";
    
    var divFilter = document.createElement("div");
    divFilter.className = "filter";
    
    var filterButton1 = document.createElement("button");
    filterButton1.className = "filterBtn1";
    filterButton1.classList.add("activeFilter");
    filterButton1.textContent = "All";
    
    var filterButton2 = document.createElement("button");
    filterButton2.className = "filterBtn2";
    filterButton2.textContent = "Completed";
    
    var filterButton3 = document.createElement("button");
    filterButton3.className = "filterBtn3";
    filterButton3.textContent = "Pending";
    
    divFilter.appendChild(filterButton1);
    divFilter.appendChild(filterButton2);
    divFilter.appendChild(filterButton3);
    divtodoHeading.appendChild(ptodoTitle);
    divtodoHeading.appendChild(todoButton);
    divtodoBox.appendChild(divtodoHeading);
    divtodoBox.appendChild(divFilter);
    todoSection.appendChild(divtodoBox);
    
    var todoBoxName = todoButton.parentElement.parentElement.classList[1];
    todoButton.setAttribute("onclick",`generateTodoItem("${todoBoxName}")`);

    filterButton1.setAttribute("onclick",`filterStatus(this,this.parentElement.parentElement)`);
    filterButton2.setAttribute("onclick",`filterStatus(this,this.parentElement.parentElement)`);
    filterButton3.setAttribute("onclick",`filterStatus(this,this.parentElement.parentElement)`);
    // }
    // else {
    //     alert("To do list name cannot be empty");
    // }
}
// for todo item
var todoItemBtn = document.querySelector(".todoHeading button");
var todoBox = document.querySelector(".todoBox");
var noteSection = document.querySelector(".noteSection");
// todoItemBtn.addEventListener("click",generateTodoItem);
function generateTodoItem(boxName) {
    // if(todoInput.value!=""){
    var divTodoListUl = document.createElement("div");
    divTodoListUl.className = "todoListUl";
    divTodoListUl.classList.add(`${boxName}listItem${i}`);

    var divCheckbox = document.createElement("div");
    divCheckbox.className = "checkBox";

    var inputCheckbox = document.createElement("input");
    inputCheckbox.setAttribute("type","checkbox");
    inputCheckbox.className = "checkbox";
    
    var divTodoText = document.createElement("div");
    divTodoText.className = "todoText";
    divTodoText.setAttribute("data-status","pending");
    divTodoText.textContent = todoInput.value;
    todoInput.value = "";
    
    var divDelete = document.createElement("div");
    divDelete.className = "delete";
    
    var iTag = document.createElement("i");
    iTag.className = "fa fa-ellipsis-v";
    iTag.setAttribute("aria-hidden","true");
    
    divDelete.appendChild(iTag);
    divCheckbox.appendChild(inputCheckbox);
    divTodoListUl.appendChild(divCheckbox);
    divTodoListUl.appendChild(divTodoText);
    divTodoListUl.appendChild(divDelete);

    var box = document.querySelector(`.${boxName}`);
    box.appendChild(divTodoListUl);     

    inputCheckbox.setAttribute("onclick",`isChecked(this)`);
    // }
    // else {
        // alert("To do item cannot be empty");
    // }
}
// checked
var todoCheck = document.querySelector(".checkbox");
function isChecked(todoText)  {
    var todoPText = todoText.parentElement.nextElementSibling;
    todoPText.classList.toggle("striked");
    if(todoPText.classList.contains("striked")) {
        todoPText.setAttribute("data-status","completed");
    }
    else {
        todoPText.setAttribute("data-status","pending");
    }
}
// sorting function
function filterStatus(currActiveFilter,boxName) {
    var len = boxName.children[1].children.length;
    var lenText = boxName.children.length;
    for(let i=0;i<len;i++) {
    boxName.children[1].children[i].classList.remove("activeFilter");
    }
    currActiveFilter.classList.add("activeFilter");
    for(let i=2;i<lenText;i++) {
        var status = boxName.children[i].children[1].dataset.status;
        console.log(status);
    }
}
// function filterTodos() {
    
// }