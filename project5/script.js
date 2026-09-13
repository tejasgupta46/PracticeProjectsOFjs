const panels = document.querySelectorAll(".container")
const pannel = document.querySelectorAll(".pannel")
const panel1 = document.querySelector("#panel1")


// let toggle = () =>{
    // pannel.classList.toggle('open-active')
    // pannel.classList.toggle('open')
// }
// 
pannel.forEach( (val) => {
val.addEventListener( 'click', ()=>{
    val.classList.toggle('open-active')
    val.classList.toggle('open')
})

})
// 

// for(let x of panels){
    // for(let i = 0 ; i<4; i++){
// 
    //   console.log(x.children[i])
    //   if(x.children[i].className === 'pannel'){
//    x.children[i].addEventListener( 'click' ,()=>{
        //    pannel.classList.toggle('open-active')
        //    pannel.classList.toggle('open')
        //    
//    })
    //   }
    //   x.children[i].addEventListener( 'click',(e)=>{
        // console.log(e)
        // pannel.classList.toggle('open-active')
        // pannel.classList.toggle('open')
    //   })
    // }
// }


// panels.addEventListener( 'click',(e)=>{
//    console.log(e.target.classList.value)
//    if(e.target.classList.value === 'pannel'){
// pannel.addEventListener( 'click' ,()=>{
    // pannel.classList.toggle('open-active')
    // pannel.classList.toggle('open')
// })
//    }
// })






