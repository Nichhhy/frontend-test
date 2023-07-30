import { useContext } from "react";
import LightImage from "../Images/sun.png";
import SearchHistory from "./SearchHistory";
import { historyContext } from "../App";

export default function WeatherSummary() {
  const [allDetails, setAllDetails] = useContext(historyContext);

  return (
    <div className="grid grid-rows-[150px / auto auto auto] flex-auto grid-cols-2   ">
      <div className="col-start-2 row-span-2 row-start-1 flex justify-end z-10">
        <img
          src={LightImage}
          alt="sun"
          className="object-contain min-w-[157px]"
        />
      </div>

      <div className="  bg-white bg-opacity-20 rounded-[40px] col-start-1 col-span-2  row-start-2 row-span-5 h-full flex flex-col ">
        <div className="w-full px-[26px] py-[20px] flex">
          <div className="w-1/2 md:w-[25%] flex flex-col gap-[7px] fadeInUp-animation">
            <p className="text-[14px">Today’s Weather</p>
            <p className="text-[50px] text-[#6C40B5] font-bold">
              {allDetails.current.temp}&deg;
            </p>
            <p>
              H: {allDetails.current.high}&deg; L: {allDetails.current.low}&deg;
            </p>
            <p>
              {allDetails.current.location}, {allDetails.current.country}
            </p>
          </div>
          <div className="w-1/2 md:w-[75%] md:flex-row-reverse md:justify-start md:gap-[25px] flex flex-col justify-end items-end gap-[5px] fadeInUp-animation">
            <p className="text-[18px] text-[#666666] text-right">
              {allDetails.current.cloud}
            </p>
            <p className="text-[18px] text-[#666666] text-right">
              Humidity: {allDetails.current.humidity} %
            </p>
            <p className="text-[18px] text-[#666666] text-right">
              {allDetails.current.date}
            </p>
          </div>
        </div>
        <div className="bg-white bg-opacity-20 flex-col rounded-[24px] mx-[20px] mb-[20px]  flex-auto flex">
          <div className=" px-[20px] py-[22px]">
            <p>Search History</p>
          </div>
          <div className=" px-[20px] pb-[22px]  max-h-[548px] flex-auto overflow-auto">
            <div className=" flex flex-col gap-[18px] ">
              {allDetails.history.length !== 0 ? (
                allDetails.history.map((item, index) => {
                  return (
                    <SearchHistory
                      key={index}
                      index={index}
                      countryInfo={allDetails.history[index]}
                    />
                  );
                })
              ) : (
                <div className="flex justify-center h-[300px] items-center flex-auto">
                  Currently no history
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
