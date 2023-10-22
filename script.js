const rPicker = document.getElementById('r-picker')
const gPicker = document.getElementById('g-picker')
const bPicker = document.getElementById('b-picker')

const rResult = document.getElementById('r-result')
const gResult = document.getElementById('g-result')
const bResult = document.getElementById('b-result')

const box = document.querySelector('.box')
const container = document.querySelector('.container')

let r = 255
let g = 255
let b = 255

rPicker.addEventListener('input', function() {
    r = rPicker.value
    console.log(`${r}, ${g}, ${b}`)
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    rResult.textContent = `${r},`
})

gPicker.addEventListener('input', function() {
    g = gPicker.value
    console.log(`${r}, ${g}, ${b}`)
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    gResult.textContent = `${g},`
})

bPicker.addEventListener('input', function() {
    b = bPicker.value
    console.log(`${r}, ${g}, ${b}`)
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    bResult.textContent = b
})
