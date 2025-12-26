import { useEffect } from "react";
import "./weather.css";

function Weather() {
  useEffect(() => {
    fetchWeather();
  }, []);

  async function fetchWeather() {
    const res = await fetch(
      "https://hagonoytides-backend-1.onrender.com/weather?city=Hagonoy"
    );

    const data = await res.json();
    console.log("fetched data::::", data);
  }

  return <div>Weather</div>;
}

export default Weather;
