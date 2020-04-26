import '../src/app1.css'
import $ from 'jquery'

const $num = $('#app1 .num')
const $add1 = $('#app1 #add1')
const $subtract1 = $('#app1 #subtract1')
const $multiply2 = $('#app1 #multiply2')
const $divide2 = $('#app1 #divide2')

let num = parseInt(localStorage.getItem('n')) || 100
$num.text(num )

$add1.on('click', e => {
    num += 1
    $num.text(num)
    localStorage.setItem('n', num)
})
$subtract1.on('click', e => {
    num -= 1
    $num.text(num)
    localStorage.setItem('n', num)
})
$multiply2.on('click', e => {
    num *= 2
    $num.text(num)
    localStorage.setItem('n', num)
})
$divide2.on('click', e => {
    num /= 2
    $num.text(num)
    localStorage.setItem('n', num)
})