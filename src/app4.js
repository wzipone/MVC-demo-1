import '../src/app4.css'
import $ from 'jquery'

const $circle = $('#app4 > .circle')

$circle
    .on('mouseover', e => {
        $circle.addClass('active')
    })
    .on('mouseout', e => {
        $circle.removeClass('active')
    })