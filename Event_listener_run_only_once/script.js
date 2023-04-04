let element = document.getElementById("button1")
element.addEventListener('click', () => {
    console.log("I run only once")
}, {
    once: true
})