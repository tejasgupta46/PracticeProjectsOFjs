const addbtn = document.querySelector('.Addbtn')
const items = document.querySelector(".items")
const li =  document.querySelector('li') 
const todos = document.querySelector('input')


let data =  JSON.parse(localStorage.getItem("todos")) || [] ;

// show todos or fetch from lccal storage 
function showTasks(){
  items.innerHTML = ''
  
  data.forEach((e , index)=>{


    let el = document.createElement('li')    
    let delbtn = document.createElement('button')
    delbtn.innerText = 'delete'
    
    el.innerText = e
    el.append(delbtn)
    items.append(el)
    delbtn.classList.add('del')
    el.classList.add('dec')
    console.log(e)
    
    delbtn.addEventListener( 'click' ,()=>{
      data.splice(index,1)
      save()
      
      showTasks()
    })

  })
  
}



// save todos 

function save(){
  localStorage.setItem('todos' , JSON.stringify(data))
}


// add todos 

function addTodos(){

  let val = todos.value.trim();
      if(val === ""){
        alert("enter something")
      }

     else{
        data.push(val.trim()) 
        save()
      showTasks()
    }
 
    todos.value = " "


}

addbtn.addEventListener('click' ,()=>{
         addTodos()
})



showTasks()