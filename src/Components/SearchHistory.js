import searchDark from "../Images/searchDark.png";
import deleteIcon from "../Images/delete.png";
import { useContext } from "react";
import { historyContext } from "../App";

export default function SearchHistory(props) {
  const { allDetails, setAllDetails } = useContext(historyContext);
  const { getWeatherInformation } = useContext(historyContext);

  /**Deletes specific record in history array */
  const deleteRecord = (index) => {
    setAllDetails({
      ...allDetails,
      history: [
        ...allDetails.history.slice(0, index),
        ...allDetails.history.slice(index + 1),
      ],
    });
  };

  /** set current  details to specific information in history*/
  const setCurrent = () => {
    getWeatherInformation(props.countryInfo.location);
  };

  return (
    <div className="w-full px-[10px] py-[13px] bg-white bg-opacity-40 gap-[9px] rounded-[16px] flex justify-center items-center hover:cursor-pointer fadeInUp-animation">
      <div className="w-4/5 flex flex-col justify-start md:flex-row md:justify-between md:items-center ">
        <p className="text-[14px]">
          {props.countryInfo.location}, {props.countryInfo.country}
        </p>
        <p className="text-[10px]">{props.countryInfo.date}</p>
      </div>
      <div
        className="rounded-full bg-white shadow-md w-[34px] h-[34px] p-[9px] flex justify-center items-center"
        onClick={() => {
          setCurrent();
        }}
      >
        <img src={searchDark} alt="searchDark" />
      </div>
      <div
        className="rounded-full bg-white shadow-md w-[34px] h-[34px] p-[9px] flex justify-center items-center"
        onClick={() => {
          deleteRecord(props.index);
        }}
      >
        <img src={deleteIcon} alt="deleteIcon" />
      </div>
    </div>
  );
}
