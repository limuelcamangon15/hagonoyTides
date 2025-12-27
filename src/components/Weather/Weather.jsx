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
import AuroraBackground from "../ui/AuroraBackground";

function Weather() {
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState();
  const [temperature, setTemperature] = useState();
  const [wind, setWind] = useState();
  const [time, setTime] = useState(new Date());

  const weatherBasedColors = {
    sunny: ["#FF3C00", "#FFD700", "#00FFFF"],
    cloudy: ["#6B5B95", "#FF6F61", "#88B04B"],
    rainy: ["#001F3F", "#39CCCC", "#FF4136"],
    thunderstorm: ["#FF00FF", "#00FF00", "#FFFF00"],
  };

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchWeather();
  }, []);

  async function fetchWeather() {
    const res = await fetch(
      "https://hagonoytides-backend-1.onrender.com/weather?city=Hagonoy"
    );

    const data = await res.json();
    console.log("fetched data::::", data);

    console.log("setWeather", data.weather[0]);
    setWeather(data.weather[0]);

    console.log("setLocation", data.name);
    setLocation(data.name);

    console.log("setTemperature", data.main);
    setTemperature(data.main);

    console.log("setWind", data.wind);
    setWind(data.wind);
  }

  return (
    <div className="relative flex flex-row justify-between p-1 gap-5 mt-23 mx-auto rounded-4xl border border-amber-400/20 backdrop-blur-2xl w-[95%] h-50 overflow-hidden">
      <AuroraBackground
        colorStops={weatherBasedColors.thunderstorm}
        blend={1}
        amplitude={1.2}
        speed={1}
      />
      <div className="z-10 flex flex-row w-full backdrop-blur-3xl rounded-3xl text-white/50 px-5 py-5 md:px-20">
        {/* Left Side */}
        <div className="flex flex-col w-1/2 justify-between text-left">
          <div className="">
            <p className="text-white text-xl">
              {time.toLocaleString("en-PH", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p>{location}</p>
          </div>

          <div>
            <p className="text-white text-5xl font-semibold">39°C</p>
            <p>Sunny</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col w-1/2 justify-between items-end text-right">
          <div>
            <p>Today</p>
            <p>{time.toLocaleTimeString()}</p>
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
