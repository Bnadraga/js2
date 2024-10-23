// theme 1

// const parent = document.querySelector('#parent')
// const child = document.querySelector('#child')
// const des = document.querySelector('#des')

// parent.addEventListener('click', () => {
//     console.log('parent message')
// })
// child.addEventListener('click', () => {
//     console.log('child message')
// })
// des.addEventListener('click', () => {
//     console.log('des message')
// })

// const parent = document.querySelector('#parent')
// parent.addEventListener('click', (event) => {
//     console.log('event.target: ', event.target)
//     console.log('event.currentTarget: ', event.currentTarget)
// })

// const parent = document.querySelector('#parent')
// const child = document.querySelector('#child')
// const des = document.querySelector('#des')

// parent.addEventListener('click', () => {
//     alert('parent message')
// })
// child.addEventListener('click', () => {
//     alert('child message')
// })
// des.addEventListener('click', (event) => {
//     event.stopImmediatePropagation()
//     alert('des message')
// })

// const box = document.querySelector("div.box");
// box.addEventListener("click", function (event) {
//     console.log(event.target)
// });

// const output = document.querySelector(".output");
// const colorPalette = document.querySelector(".color-palette");

// colorPalette.addEventListener("click", selectColor);
// function selectColor(ev) {
//   if (ev.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = ev.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// createPaletteItems();
// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomHexColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }
// function getRandomHexColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";

//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// todolist

const taskForm = document.getElementById("taskForm");
const newTaskInput = document.getElementById("newTask");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    newTaskInput.value = "";
  }
});
function addTask(taskText) {
  const li = document.createElement("li");

  li.innerHTML = `
      <input type="checkbox" class="comleteTask">
      <span>${taskText}</span>
      <button class="deleteTask"> 💩</button>
  `;
  taskList.appendChild(li);
}
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteTask")) {
    e.target.parentElement.remove();
  }
  if (e.target.classList("comleteTask")) {
    const task = e.target.nextElementSibling;
    task.style.textDecoration = e.target.checked ? "line-trought" : "none";
  }
  if (e.target.checked) {
    const task = e.target.nextElementSibling;
    task.style.backgroundColor = "green";
  }
});
