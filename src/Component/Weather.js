import {useState} from "react";

export default function Weather(){
    let apiKey = "2629cb07f801fedceda63abc5f4d1c51";
    let [city,setCity]=useState("");
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
const [weather, setWeather] = useState(null)
   

    function changeFunction(e){
        setCity(e.target.value)
    }

    function handleSubmit(){
        fetch(url).then((res)=>res.json()).then((data)=>setWeather(data)).catch((error)=>console.log(error));

    }
    return(
        <>
        <h1>Weather in {city}</h1>
        {weather !==null && <p>Temprature: {weather.main.temp} C</p>}
        {weather !==null && <p>Conditions: {weather.weather[0].description}</p>}
        <input type="text" id="city" value={city}  placeholder="enter city" onChange={changeFunction}/>
        <button onClick={handleSubmit}>Click</button>
        </>
    )
}