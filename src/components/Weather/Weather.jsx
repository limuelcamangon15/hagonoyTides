import { useEffect, useState } from "react";
import Skeleton from "../ui/Skeleton";

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
  const [fetchingData, setFetchingData] = useState(true);

  const [weather, setWeather] = useState();
  const [location, setLocation] = useState();
  const [temperature, setTemperature] = useState();
  const [wind, setWind] = useState();

  const [time, setTime] = useState(new Date());

  const weatherBasedColors = {
    sunny: ["#FFD700", "#FF4500", "#00BFFF"],
    cloudy: ["#7B8FA1", "#A9A9A9", "#D3D3D3"],
    rainy: ["#001F3F", "#0077B6", "#00B4D8"],
    thunderstorm: ["#2C003E", "#6600CC", "#FF00FF"],
  };

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchWeather();
  }, []);

  async function fetchWeather() {
    try {
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

      setFetchingData(false);
    } catch (error) {
      console.log(error);
      setFetchingData(false);
    }
  }

  return (
    <div className="relative flex flex-row justify-between p-1 gap-5 mt-23 mx-auto rounded-4xl border border-yellow-500/30 backdrop-blur-2xl w-[95%] h-50 overflow-hidden">
      <>
        {!fetchingData && (
          <AuroraBackground
            colorStops={weatherBasedColors.cloudy}
            blend={1}
            amplitude={1.2}
            speed={1}
          />
        )}

        <div className="z-10 flex flex-row w-full backdrop-blur-3xl rounded-3xl text-white/50 px-5 py-5 md:px-20">
          {/* Left Side */}
          <div className="flex flex-col gap-2 w-1/2 justify-between text-left">
            <div>
              {fetchingData ? (
                <Skeleton className="w-33 md:w-70 h-10 rounded-md" />
              ) : (
                <p className="text-white text-lg md:text-xl">
                  {time.toLocaleString("en-PH", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              )}

              {fetchingData ? (
                <Skeleton className="w-30 md:w-50 h-5 rounded-md mt-1" />
              ) : (
                <p>{location}, Bulacan</p>
              )}
            </div>

            <div>
              {fetchingData ? (
                <Skeleton className="w-25 h-15 rounded-md" />
              ) : (
                <p className="bg-linear-to-t from-white to-white/50 bg-clip-text text-transparent w-fit text-5xl font-semibold">
                  {temperature.temp.toFixed(0)}°C
                </p>
              )}

              {fetchingData ? (
                <Skeleton className="w-30 md:w-40 h-5 mt-1 rounded-md" />
              ) : (
                <p className="text-white">
                  {weather.description.charAt(0).toUpperCase() +
                    weather.description.slice(1)}
                </p>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col w-1/2 justify-between items-end text-right">
            <div className="flex flex-col">
              {fetchingData ? (
                <Skeleton className="w-25 md:w-30 h-5 mt-1 rounded-md self-end" />
              ) : (
                <p>Today</p>
              )}

              {fetchingData ? (
                <Skeleton className="w-33 md:w-40 h-5 mt-1 rounded-md" />
              ) : (
                <p>{time.toLocaleTimeString()}</p>
              )}
            </div>

            <div>
              {fetchingData ? (
                <Skeleton className="w-30 h-22 mt-1 rounded-md" />
              ) : (
                <img src={cloudyPNG} alt="" className="w-28" />
              )}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Weather;
