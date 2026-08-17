let seconds = document.querySelector("#seconds")
let minutes = document.querySelector("#minutes")
let hours = document.querySelector("#hours")


const update = () =>{
      const now = new Date();
      const sec = now.getSeconds();
      const secdegrees = ((sec/60) *360) + 90;
      seconds.style.transform = `rotate(${secdegrees}deg)`

      const mins = now.getMinutes()
      const mindegrees =  ((mins / 60) * 360) + ((sec/60)*6) + 90;
      minutes.style.transform = `rotate(${mindegrees}deg)`;
      
      const hr = now.getHours()
       const hrdegrees = ((hr / 12) * 360) + ((mins/60)*26) + 90;
       hours.style.transform = `rotate(${hrdegrees}deg)`;

       
       console.log(sec)
       console.log(hr)
    //    console.log(min)
    //    console.log(hr)
} 


setInterval(update,1000)

update()