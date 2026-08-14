let seconds = document.querySelector("#seconds")
let minutes = document.querySelector("#minutes")
let hours = document.querySelector("#hours")


const update = () =>{
      const now = new Date();
      const sec = now.getSeconds();
      const secdegrees = ((sec/60) *360) + 90;
      seconds.style.transform = `rotate(${secdegrees}deg)`

      const min = now.getMinutes()
      const mindegrees = ((min/60) *360) + 90;
      minutes.style.transform = `rotate(${mindegrees}deg)`;
      
      const hr = now.getHours()
       const hrdegrees = ((hr/60) *360) + 90;
       hours.style.transform = `rotate(${hrdegrees}deg)`;

       
       console.log(sec)
    //    console.log(min)
    //    console.log(hr)
} 


setInterval(update,1000)