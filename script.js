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

const box = document.querySelector("div.box");
box.addEventListener("click", function (event) {
    console.log(event.target)
});
