import "./App.css";
import SearchBar from "./Components/SearchBar";
import WeatherSummary from "./Components/WeatherSummary";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const historyContext = createContext();

function App() {
  /** Hold all details of current and history of searches */
  const [allDetails, setAllDetails] = useState({
    current: {},
    history: [],
  });

  /**Load initial information with singapore details */
  useEffect(() => {
    getWeatherInformation("Singapore");
  }, []);

  /** get weather information from API, API key stored in .env file */
  const getWeatherInformation = async (location) => {
    /**Get today's date */
    let today = new Date();

    /** First call to retrieve details on location, lat and lon */
    let locationDetails = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.REACT_APP_API_KEY}`
    );

    /** API retrns a 200 status even when no data is return so check if data array is populated
     */
    if (locationDetails.data.length === 0) {
      /**Aleart if no record is found */
      alert("Enter Valid Coutnry");
    } else {
      /** Continue to next API call to get weather details if country is valid */
      let weatherDetails = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${locationDetails.data[0].lat}&lon=${locationDetails.data[0].lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );

      /** Object to store weather details */
      let newWeatherInfo = {
        temp: weatherDetails.data.main.temp,
        high: weatherDetails.data.main.temp_max,
        low: weatherDetails.data.main.temp_min,
        country: weatherDetails.data.sys.country,
        location: location,
        cloud: weatherDetails.data.weather[0].main,
        humidity: weatherDetails.data.main.humidity,
        date: `${today.getMonth()}-${today.getDate()}-${today.getFullYear()} ${today
          .toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })
          .toLowerCase()}`,
      };

      /** Set current weather to new information and add to history */
      setAllDetails({
        ...allDetails,
        current: newWeatherInfo,
        history: [...allDetails.history, newWeatherInfo],
      });
    }
  };
  return (
    <div className=" min-h-screen flex-auto flex justify-start items-center bg-[url('./Images/bg-light.png')] w-screen flex-col ">
      {/**Main wetaher container */}
      <div className="px-[18px] pt-[18px] max-w-[700px] flex-auto  flex flex-col w-full h-full ">
        {/**Search Container and search button */}
        <historyContext.Provider
          value={{ allDetails, setAllDetails, getWeatherInformation }}
        >
          <SearchBar />
          <WeatherSummary />
        </historyContext.Provider>
      </div>
    </div>
  );
}

export default App;
