
console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#msg1')
const messageTwo = document.querySelector('#msg2')
messageOne.textContent=''
weatherForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const location = search.value;
    messageTwo.textContent='Loading'
    messageOne.textContent=''
    fetch("http://localhost:3000/weather?address="+location).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            messageTwo.textContent=data.error  
            document.getElementById('loc').value=''          
        }else {
            messageOne.textContent='Location: '+data.forcase.location.name
            messageTwo.textContent='Forcast: It looks Like '+data.forcase.current.weather_descriptions[0]+' With Temperature '+data.forcase.current.temperature
            document.getElementById('loc').value=''
        }
        console.log(data)
    })
})
})