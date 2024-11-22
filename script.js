const text_box=document.getElementById("text_box");
const btn=document.getElementById("btn");
const weather=document.getElementsByClassName("weather")[0];
    const weather_icon=document.getElementsByClassName("weather-icon")[0];
    const temp=document.getElementsByClassName("temp")[0];
    const city=document.getElementsByClassName("city")[0];
    const details=document.getElementsByClassName("details")[0];
    const humidity=document.getElementsByClassName("humidity")[0];
    const wind=document.getElementsByClassName("wind")[0];
    const err=document.querySelector(".err");

    err.style.display="none";
        weather.style.display="none";
       // temp.style.display="none";
       // city.style.display="none";
       // details.style.display="none";

btn.addEventListener("click",(e)=>
{
   const city=text_box.value;
   let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cd744314af851d646f2a69433ded4883&units=metric`;
   display(url);
});
async function display(url)
{
    try
    {
    const res=await fetch(url);
    const result=await res.json();
    console.log(result);

    

    if(result.cod ==="404")
    {
        err.style.display="block";
       // weather.innerHTML="City not found";
      weather.style.display="none";
      // weather_icon.style.display="none";
     //  temp.style.display="none";
        //city.style.display="none";
       // details.style.display="none";

      // temp.style.display="inline-block";
       //temp.innerHTML="City not found";

    }
    else
    {
        err.style.display="none";
        weather.style.display="block";
       // weather.innerHTML="";
       weather_icon.style.display="inline-block";
       // temp.style.display="inline-block";
    //city.style.display="inline-block";
      //  details.style.display="inline-block";

    temp.innerHTML=`${Math.round(result.main.temp)}°C`;
    city.innerHTML=result.name;
    humidity.innerHTML=`${Math.round(result.main.humidity)}%`;
    wind.innerHTML=`${Math.round(result.wind.speed)} m/s`;
    if(result.weather[0].main=="Clouds")
        weather_icon.style.src="images/clouds.png";
    if(result.weather[0].main=="Clear")
    weather_icon.style.src="images/clear.png";
    if(result.weather[0].main=="Drizzle")
        weather_icon.style.src="images/drizzle.png";
    if(result.weather[0].main=="Mist")
        weather_icon.style.src="images/mist.png";
    if(result.weather[0].main=="Rain")
        weather_icon.style.src="images/rain.png";
    if(result.weather[0].main=="Clear")
        weather_icon.style.src="images/clear.png";
    if(result.weather[0].main=="Snow")
        weather_icon.style.src="images/snow.png";
    }
    }
    catch(error)
    {
        console.log("Error fetching the weather data:");
    }

}
