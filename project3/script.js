let blr = document.querySelector("#blur")
const img  = document.querySelector("#blur-img")

let  blured = () =>{

    
    blr.addEventListener( 'mousemove',(e)=>{
        
        img.style.filter = `blur(${e.target.value+'px'})`   
        console.log(e.target.value)
    })
}

blured()