hour = document.querySelector(".hour");
minute = document.querySelector(".minute");
second = document.querySelector(".second");

setInterval(()=>{
    date = new Date();
    hTime = date.getHours();
    mTime = date.getMinutes();
    sTime = date.getSeconds();

    hrotation = 30*hTime + mTime/2;
    mrotation = 6*mTime;
    srotation = 6*sTime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
},1000)