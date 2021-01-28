const currtime=new Date;
//alert(currtime.getHours())
const secondhand=document.querySelector(".secondhand");
const minutehand=document.querySelector(".minutehand");
const hourhand=document.querySelector(".hourhand");
// console.log(secondhand)

const digits = document.querySelectorAll('.digit');

//digits[1].style.transform = `rotate(${30*1}deg)`
for(let i=1;i<=digits.length;i++){
    digits[i-1].style.transform = `rotate(${30*i}deg)`;
}

setInterval(renderclock,1000);
function renderclock(){
    const time=new Date;
    let secondRotation=time.getSeconds();
    let minuteRotation=time.getMinutes();
    let hourRotation=time.getHours();
    if(hourRotation>12){
        hourRotation-=12
    }            
    hourRotation+=(minuteRotation/60)
    secondhand.style.transform = `translateX(-50%) rotate(${secondRotation*6}deg)`
    minutehand.style.transform = `translateX(-50%) rotate(${minuteRotation*6}deg)`
    hourhand.style.transform = `translateX(-50%) rotate(${hourRotation*30}deg)`

    // console.log('minute'+minuteRotation);
    // console.log('hour'+hourRotation);
    // console.log(minuteRotation/60)
    
}


renderclock();