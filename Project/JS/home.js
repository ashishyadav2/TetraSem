// for tabs
var tabs = document.querySelector(".tabs");
var addTabBtn = document.querySelector(".tabs .addTabBtn");
var tabTitleInput = document.querySelector(".tabs input");
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
    }
    else {
        alert("Tab name cannot be empty");
    }
}

// for note
var noteSection = document.querySelector(".noteSection");
var noteBtn = document.querySelector(".noteSection .addTabBtn");
noteBtn.addEventListener("click",generateNote);

// date format
var currDate = new Date();
var hour = currDate.getHours();
var min = currDate.getMinutes();
var mon = currDate.getMonth();
var year = currDate.getFullYear();
var day = currDate.getDay();
var formatDate = `${hour}:${min}, ${day}/${mon}/${year}`;

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
    pNoteText.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias odio mollitia ipsum? Fuga, architecto rem nihil enim, impedit quisquam libero facilis vel quas vitae quod nobis! Eaque iure iste maiores nobis aperiam possimus ratione. Asperiores laborum eveniet aspernatur assumenda nesciunt, sunt eius ipsum deserunt expedita impedit eum quae repellendus exercitationem, fuga libero minus reiciendis at dignissimos illo voluptatum, similique sint quia beatae dolores. Rem ipsum dolores aspernatur architecto sit nesciunt, molestiae autem quia voluptate et, mollitia illo. Ipsum odio libero maiores illo ducimus rerum porro atque, hic consequatur voluptatum, error ex id quisquam saepe aperiam, tempore doloribus nemo aspernatur perferendis eum sit quidem quasi! Repellat iusto fugiat eligendi quia consequuntur molestias nulla optio quaerat enim, incidunt inventore sit excepturi dolore cum aliquam doloremque necessitatibus totam ipsum a nisi modi eveniet ratione? Quam ex corporis id, incidunt saepe quidem pariatur culpa minima, reprehenderit ipsam iusto? Iure quaerat obcaecati quo consectetur? Explicabo!";

    var divDate = document.createElement("div");
    divDate.className = "date";
    divDate.textContent = formatDate;

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
function generateTodo() {
    var divtodoBox = document.createElement("div");
    divtodoBox.className = "todoBox";

    var divtodoHeading = document.createElement("div");
    divtodoHeading.className = "todoHeading";

    var ptodoTitle = document.createElement("div");
    ptodoTitle.className = "todoTitle";
    ptodoTitle.textContent = todoInput.value;

    var todoButton = document.createElement("button");
    todoButton.textContent = "+";

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
}
// for todo item
var todoItemBtn = document.querySelectorAll(".todoHeading button");
var todoBox = document.querySelectorAll(".todoBox");
for(let i=0;i<todoItemBtn.length;i++) {
    todoItemBtn[i].addEventListener("click",generateTodoItem);
}
function generateTodoItem() {
    var divTodoListUl = document.createElement("div");
    divTodoListUl.className = "todoListUl";

    var divCheckbox = document.createElement("div");
    divCheckbox.className = "checkBox";

    var inputCheckbox = document.createElement("input");
    inputCheckbox.setAttribute("type","checkbox");

    var divTodoText = document.createElement("div");
    divTodoText.className = "todoText";
    divTodoText.textContent = todoInput.value;

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
    todoBox.appendChild(divTodoListUl);
}