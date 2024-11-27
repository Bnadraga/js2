"use strict";
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

// const taskForm = document.getElementById("taskForm");
// const newTaskInput = document.getElementById("newTask");
// const taskList = document.getElementById("taskList");

// taskForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const taskText = newTaskInput.value.trim();
//   if (taskText !== "") {
//     addTask(taskText);
//     newTaskInput.value = "";
//   }
// });
// function addTask(taskText) {
//   const li = document.createElement("li");

//   li.innerHTML = `
//       <input type="checkbox" class="comleteTask">
//       <span>${taskText}</span>
//       <button class="deleteTask"> 💩</button>
//   `;
//   taskList.appendChild(li);
// }
// taskList.addEventListener("click", (e) => {
//   if (e.target.classList.contains("deleteTask")) {
//     e.target.parentElement.remove();
//   }
//   if (e.target.classList("comleteTask")) {
//     const task = e.target.nextElementSibling;
//     task.style.textDecoration = e.target.checked ? "line-trought" : "none";
//   }
//   if (e.target.checked) {
//     const task = e.target.nextElementSibling;
//     task.style.backgroundColor = "green";
//   }
// });

// theme 2

// console.log(_);
// console.log(_.sum([1, 2, 3]));

// window.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     console.log("scroll 300ms");
//   }, 100)
// );
// const output = document.querySelector(".output");
// let scrollCounter = 0;
// document.addEventListener("scroll", () => {
//   scrollCounter += 1;
//   output.textContent = scrollCounter;
// });

// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttleOutput = document.querySelector(".output.throttle");
// const debounceOutput = document.querySelector(".output.debounce");

// const eventCounter = {
//   vanilla: 0,
//   throttle: 0,
//   debounce: 0,
// };

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla++;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttle++;
//     throttleOutput.textContent = eventCounter.throttle;
//   }, 3000)
// );

// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     eventCounter.debounce++;
//     debounceOutput.textContent = eventCounter.debounce;
//   }, 300)
// );

// function handleInput(ev) {
//   const text = ev.target.value;
//   console.log("Відправка на сервер: ", text);
// }
// const throttleInput = _.throttle(handleInput, 500)
// const input = document.getElementById("input");
// input.addEventListener('input', throttleInput)

// function stopMove(ev) {
//   console.log("x: ", ev.clientX, "y: ", ev.clientY);
// }
// const debounceMove = _.debounce(stopMove, 100);
// document.addEventListener("mousemove", debounceMove);

// const text = document.getElementById('text')
// const input = document.getElementById('input')

// function handleInput(ev) {
//   const handleText = ev.target.value;
//   text.textContent = `Вітаємо, ${handleText}!`
// }
// const debounceInput = _.debounce(handleInput, 500);
// input.addEventListener('input', debounceInput)

// function updateCoordinants(ev) {
//   const graph = document.getElementById("graph");
//   const point = document.getElementById("point");
//   const coordDisp = document.getElementById("coord");

//   const rect = graph.getBoundingClientRect();
//   const x = ev.clientX - rect.left;
//   const y = ev.clientY - rect.top;

//   point.setAttribute("cx", x);
//   point.setAttribute("cy", y);

//   coordDisp.textContent = `
//   COORDINATS:
//   x: ${x.toFixed(0)};
//   y: ${y.toFixed(0)}`;
// }

// const throttleUptade = _.throttle(updateCoordinants, 50)
// const graphEl = document.getElementById('graph')
// graphEl.addEventListener('mousemove', throttleUptade)

// const text = document.getElementById("text");
// const plus = document.getElementById("plus");
// const minus = document.getElementById("minus");

// function updateText(change) {
//   const currentText = parseInt(window.getComputedStyle(text).fontSize);
//   text.style.fontSize = `${currentText + change}px`;
// }
// plus.addEventListener("click", updateText(2));
// minus.addEventListener("click", updateText(-2));

// theme 3

// IntersectionObserver(callback, option);

// const options = {
//   rootMargin: "50px",
//   threshold: 0.25,
// };
// const onEntry = (entries, observer) => {
//   entries.forEach((entry) => {
//     // ...
//   });
// };
// const observer = new IntersectionObserver(onEntry, options);

// const options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.1,
// };
// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const img = entry.target;
//       img.src = img.dataset.src;
//       observer.unobserve();
//     }
//   });
// }, options);

// document.querySelectorAll(".lazy-img").forEach((img) => {
//   observer.observe(img);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const fruits = document.querySelectorAll(".fruits-list li");

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       const img = entry.target.querySelector("img");
//       const title = entry.target.querySelector("h3");

//       if (entry.isIntersecting) {
//         img.src = img.getAttribute("data-high-res");
//         entry.target.classList.add("visible");
//       } else {
//         img.src = img.src.replace("-1", "-2");
//         entry.target.classList.remove("visible");
//       }
//     });
//   });
//   fruits.forEach((fruit) => observer.observe(fruit));
// });

// theme 4

