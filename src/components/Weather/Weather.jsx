import { useEffect, useState } from "react";

import cloudyPNG from "../../assets/weather-png/cloudy.png";
import nightCloudyPNG from "../../assets/weather-png/nightCloudy.png";
import sunnyPNG from "../../assets/weather-png/sunny.png";
import rainyPNG from "../../assets/weather-png/rainy.png";
import thunderstormPNG from "../../assets/weather-png/thunderstorm.png";

import cloudyGIF from "../../assets/weather-gif/cloudyGIF.gif";
import nightCloudyGIF from "../../assets/weather-gif/nightCloudyGIF.gif";
import sunnyGIF from "../../assets/weather-gif/sunnyGIF.gif";
import rainyGIF from "../../assets/weather-gif/rainyGIF.gif";
import thunderstormGIF from "../../assets/weather-gif/thunderstormGIF.gif";

import "./weather.css";

function Weather() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    fetchWeather();
  }, []);

  async function fetchWeather() {
    const res = await fetch(
      "https://hagonoytides-backend-1.onrender.com/weather?city=Hagonoy"
    );

    const data = await res.json();
    console.log("fetched data::::", data);
    setWeather(data);
  }

  return (
    <div className="flex flex-row justify-between p-1 gap-5 mt-23 mx-auto rounded-4xl border border-amber-400/20 backdrop-blur-2xl w-[95%] h-50">
      <div className="flex flex-row w-full bg-yellow-600/20 rounded-3xl text-white/50 px-5 py-5 md:px-20">
        {/* Left Side */}
        <div className="flex flex-col w-1/2 justify-between">
          <div className="">
            <p className="text-white text-xl">Monday, 15 May</p>
            <p>Hagonoy, Bulacan</p>
          </div>

          <div>
            <p className="text-white text-5xl font-semibold">39°C</p>
            <p>Sunny</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col w-1/2 justify-between items-end">
          <div>
            <p>Today</p>
            <p>4:15 AM</p>
          </div>

          <div>
            <img src={sunnyPNG} alt="" className="w-28" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
