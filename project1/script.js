
let mus = document.querySelector('#music1')
let audio1 = document.querySelector('#audio1')
let audio2 = document.querySelector('#audio2')

mus.addEventListener( 'click',(e)=>{
     console.log(e.target.innerText)
     audio1.play()
})