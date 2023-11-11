const rPicker = document.getElementById('r-picker')
const gPicker = document.getElementById('g-picker')
const bPicker = document.getElementById('b-picker')

const rResult = document.getElementById('r-result')
const gResult = document.getElementById('g-result')
const bResult = document.getElementById('b-result')

const box = document.querySelector('.box')
const container = document.querySelector('.container')
const copyButton = document.getElementById('copyButton')
const rgbResult = document.querySelector('.rgb-result')

let r = 255
let g = 255
let b = 255

rPicker.addEventListener('input', function() {
    r = rPicker.value
    rgbResult.value = `${r}, ${g}, ${b}`
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

gPicker.addEventListener('input', function() {
    g = gPicker.value
    rgbResult.value = `${r}, ${g}, ${b}`
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

bPicker.addEventListener('input', function() {
    b = bPicker.value
    rgbResult.value = `${r}, ${g}, ${b}`
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

copyButton.addEventListener('click', function() {
    rgbResult.select()
    document.execCommand('copy')
})