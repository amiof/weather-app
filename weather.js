const inputcity = document.getElementById("inputForm");
let inputcityValue
const submite = document.getElementById("sub");
const listdiv = document.getElementById("mainDiv");
submite.addEventListener("click", submitclick);
const apiKey = "edc228562ac0a8aa3116d41c0687cf56";

function submitclick() {
    inputcityValue = inputcity.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputcityValue}&appid=${apiKey}&units=metric`
    const listCity = document.createElement("div");
    listCity.classList.add("weather-card");
    listCity.innerHTML = `<p>the weather city of ${inputcityValue}:</p>`;
    fetch(url)
    .then(response=> response.json()) 
    .then (data => {console.log(data);
        const {main , sys , name, weather }=data
        const icon =`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]['icon']}.svg`
        console.log(icon)
        const markup = `<h3 class='h3name'>${name} ${sys.country}</h3>
        <div class='temp'>${Math.floor(main.temp)}</div>
        
        <figure class='img-weather'>
        <img  src='${icon}' , alt= 'city'>
        <figcaption>${weather[0].description}</figcaption>
        </figure>
        `
        
        
        listCity.innerHTML=markup
        
        
        listdiv.appendChild(listCity);
        
        
        
        
        
        })
     .catch ((err) => {
        console.log (err)
     })
    inputcity.value = ""

}
