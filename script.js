let hr=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

function displayTime(){
    let date=new Date();

    //getting hur,mins,sec from date
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hRot=30*hh+ mm/2;
    let mrot=6*mm;
    let srot=6*ss;

    hr.style.transform= `rotate(${hRot}deg)`;
    min.style.transform= `rotate(${mrot}deg)`;
    sec.style.transform= `rotate(${srot}deg)`;


}
setInterval(displayTime,1000);