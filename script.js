const items = document.querySelectorAll(".item");
const container2 = document.getElementById("container2");
const resetButton = document.querySelector(".reset-btn");

//Adding the events to drag and drop the items.
items.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

container2.addEventListener("dragover", dragOver);
container2.addEventListener("dragenter", dragEnter);
container2.addEventListener("dragleave", dragLeave);
container2.addEventListener("drop", dragDrop);

//The functionalities to be used in the whole process, specifying themselves with their names.

function dragStart() {
  this.classList.add("dragging");
}

function dragEnd() {
  this.classList.remove("dragging");
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("drag-over");
}

function dragLeave() {
  this.classList.remove("drag-over");
}

//To add items in the container 2 after dropping there.
function dragDrop() {
  const item = document.querySelector(".dragging");
  this.appendChild(item);
  item.classList.add("success");
}

//The reset button to make everything as like initially.
function reset() {
  container2.innerHTML = "";
  items.forEach((item) => {
    item.classList.remove("success");
    document.getElementById("container1").appendChild(item);
  });
}
