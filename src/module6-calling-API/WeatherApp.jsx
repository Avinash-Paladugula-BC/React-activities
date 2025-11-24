import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// https://api.openweathermap.org/data/2.5/weather?q=london&appid=1418016206d775a9b9c92d006ec98c02&units=metric

const getWeatherData = async (city) => {
  const key = "1418016206d775a9b9c92d006ec98c02";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch weather"); //any ways data.message is printing in this case
  }
  return data;
};

function WeatherApp() {
  const [city, setCity] = useState("London");
  const [inputCity, setInputCity] = useState("");
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => getWeatherData(city),
    // retry: false,
    retry: 5,
    keepPreviousData: false,
  });

  const handleSearch = () => {
    setCity(inputCity);
    refetch();
  };

  return (
    <div>
      <h2>Weather App</h2>
      <input
        placeholder="Enter city"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {isLoading && <p>Loading..</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h3>City: {data.name}</h3>
          <p>Temperature: {data.main.temp}°C</p>
          <p>Condition: {data.weather[0].description}</p>
          <img alt="weather icon"
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          />
        </div>
      )}
    </div>
  );
}

export default WeatherApp;