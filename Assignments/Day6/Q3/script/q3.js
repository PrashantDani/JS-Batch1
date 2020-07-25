const head = document.querySelector('#head')
const button = document.querySelector
('#darkmode')
const t = document.getElementById('time')
const d = document.getElementById('date1')


button.onclick = ()=>{
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
}

function t1(){
    let date = new Date();
    let hms = date.toLocaleTimeString()
    let dt = date.toLocaleDateString()
    d.innerText = dt
    t.innerText = hms
}

setInterval(t1,1000);


let name1 = prompt('Enter your name: ')
head.innerText += ` ${name1} to the web page`