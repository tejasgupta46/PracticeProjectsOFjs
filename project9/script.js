const videoplayer =  document.querySelector('#videoplayer')
const playbtn = document.querySelector('#playbtn')
const pausebtn = document.querySelector('#pausebtn')
const mutebtn = document.querySelector('#mutebtn')
const timeline = document.querySelector('#timeline')

let skipbtn = document.querySelectorAll('[data-skip]')
const play = () =>{
    videoplayer.play()
}

playbtn.addEventListener( 'click' ,()=>{

    if(videoplayer.paused){
        videoplayer.play()
    }
   else{
    videoplayer.pause()
 }
 
})



pausebtn.addEventListener( 'click' ,()=>{
    videoplayer.pause()
})

mutebtn.addEventListener( 'click' ,()=>{
     videoplayer.mute()
})


videoplayer.addEventListener( 'click' ,()=>{
   
   if(videoplayer.paused){
       videoplayer.play()     
   }                      
  else{                   
   videoplayer.pause()  
  } 
})
                        

// skip feature
function skip (){
   videoplayer.currentTime+= parseFloat(this.dataset.skip)

   console.log( videoplayer.currentTime )
}

skipbtn.forEach((btn)=>{
 btn.addEventListener('click' , skip)
})

// timeline feature 

function handleupdate(){
    
    console.log(this.value)

    videoplayer.currentTime  = parseFloat(this.value)
}


timeline.addEventListener('mousemove' , handleupdate)


// videoplayer.addEventListener(()=>{
// 
    // console.log("")
// })


mutebtn.addEventListener(  'click' ,()=>{
    console.log("mute")
})