const buttonStart = document.querySelector(".btn-success")
const buttonStop  = document.querySelector(".btn-danger")
const buttonReset= document.querySelector(".btn-warning")
const clock = document.querySelector('#clock-r')

    
let cronometro
const seconds = document.querySelector("#seconds")
const minutes = document.querySelector("#minutes")
const hour = document.querySelector("#hours")

let contS = 0;
let contM=0
let contH = 0

buttonStart.addEventListener('click', function(){
       buttonStart.style.display='none'
       buttonStop.hidden=false
       buttonReset.disabled=true

        cronometro =setInterval(() => {
            ++contS

            contS > 59 ? seconds.innerHTML=`00` :
            contS < 10 ? seconds.innerHTML=`0${contS}` : seconds.innerHTML=contS

            
            if(contS >=60){
                
                contM++
                contM > 59 ? minutes.innerHTML=`00` :
                contM < 10 ? minutes.innerHTML = `0${contM}` : minutes.innerHTML = contM
                contS=0
            }
            
            if(contM >=60){
                contH++
                contH < 10 ? hour.innerHTML = `0${contH}` : hour.innerHTML = contH
                contM=0
            }
            if(hour>=24){
                contH=`0${0}`
            }

        }, 1000);


})

buttonStop.addEventListener('click', function(){
    clearInterval(cronometro)
    buttonStop.hidden=true
    buttonStart.style.display='block'
    buttonReset.disabled=false
})

 buttonReset.addEventListener('click', function(){
    seconds.innerHTML="00"
    minutes.innerHTML="00:"
    hour.innerHTML="00:"
    buttonReset.disabled=true
    buttonStop.hidden=true
})

clock.addEventListener('click', function(){
    seconds.hidden=true
    minutes.hidden=true
    buttonStart.style.display="none"
    buttonStop.hidden=true
    buttonReset.style.display='none'
    const date = document.querySelector("#date")
    date.hidden=false


    cronometro = setInterval(() => {
        let hourR = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
        let dateFormated = hourR.replace(", ", " - ");
        dateFinal =dateFormated.split(" - ")
        hour.innerHTML=dateFinal[1]
        date.innerHTML=dateFinal[0]
    },10);
}) 

