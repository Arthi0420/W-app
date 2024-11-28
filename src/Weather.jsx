import { useState } from "react"
import "./index.css"
import { IoCloudSharp } from "react-icons/io5";
import axios from "axios"
import { RiCelsiusLine } from "react-icons/ri";


const Weather = () => {

    const [city, setcity] = useState("")
    const [weather, setweather] = useState("")
    const [temp, settemp] = useState("")
    const [desc, setdesc] = useState("")

    const handlecity = (event)=>
    {
        setcity(event.target.value)
    }

    const getweather = ()=>
    {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cc9efb2950ee971bd2cad26c32cdde7d`)

        weatherData.then(function(success){
            console.log(success)
            setweather(success.data.weather[0].main)
            settemp(success.data.main.temp)
            setdesc(success.data.weather[0].description)

        })

    }

    

    return (
        <div className="bg-black p-14 max-md:p-6">
            <div className=" bg-gradient-to-r from-violet-500 to-fuchsia-500 p-7 flex flex-col justify-center items-center rounded-md shadow-md">
                <h1 className="flex gap-1 items-center text-3xl font-bold m-2 max-md:text-2xl" >Weather Report<IoCloudSharp className="size-10 max-md:size-8" />
                </h1>
                <p className="text-xl">I can give you a weather report about your City !</p>

                <input
                onChange={handlecity}
                    placeholder="Enter Your City Name..."
                    type="text"
                    className="border m-5 w-48 md:w-80  bg-transparent  p-1 focus:no-outline" />
                <button
                onClick={getweather}
                    className=" text-xl rounded-md bg-red-500 p-2 ">Get Weather</button>


                <div className="mt-2">
                    <p className="text-2xl font-semibold p-1">Weather : {weather}</p>
                    <p className="text-2xl font-semibold p-1 flex items-center justify-center">Temperature: {temp} <RiCelsiusLine className="size-5"/>
                    </p>
                    <p className="text-2xl font-semibold p-1">Description: {desc}</p>
                </div>

            </div>
        </div>
    )
}

export default Weather