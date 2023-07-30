import { useState, useContext } from "react";
import SearchImg from "../Images/search.png";
import { historyContext } from "../App";

export default function SearchBar(props) {
  const [country, setCountry] = useState("");

  const { getWeatherInformation } = useContext(historyContext);

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div className="flex gap-[10px] md:gap-[20px] w-full  ">
      <div className="w-full bg-white bg-opacity-20 rounded-lg md:rounded-[20px] pl-[11px] md:pl-[22px] flex flex-col justify-center py-[12px] h-[40px] md:h-[60px]">
        <p className="text-[8px]  opacity-40">Country</p>
        <input
          type="text"
          value={country}
          className="text-[12px] md:text-[16px] w-full text-black placeholder-black focus:outline-0 bg-transparent"
          placeholder="Enter a Country"
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
      </div>

      <button className="bg-[#6C40B5] w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex justify-center items-center rounded-[10px] cursor-pointer">
        <img
          src={SearchImg}
          alt="searchButtonImg"
          className="p-[8px] md:p-[13px]"
          onClick={() => {
            getWeatherInformation(country);

            setCountry("");
          }}
        ></img>
      </button>
    </div>
  );
}
