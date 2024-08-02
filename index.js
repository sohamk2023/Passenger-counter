let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countstr = count + " - "
    saveEl.textContent += countstr
    count.textContent = 0
    count = 0
}