
import { useState } from "react";
import "./arrow.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import LevelCard from "./card";
export default function Arrow( ) {

  const [count, setcount] = useState(3);
  const [hovers, sethovers] = useState("");

  const handleArrowRClick = () => {
    if (count != 9) {
      setcount(prevcount => prevcount +3)
    } else {
      setcount(3);
    }
    sethovers("right")
    setTimeout(() => {
      sethovers("none")
    }, 1000);
  }

  clearTimeout(handleArrowRClick);

  const handleArrowLClick = () => {
    if (count > 3) {
      setcount(prevcount => prevcount - 3)

      sethovers("left")
      setTimeout(() => {
        sethovers("none")
      }, 1000);
    }
  };
  clearTimeout(handleArrowLClick);



  return (
    <>
      <div onClick={handleArrowLClick}>
        <div style={{ marginLeft: "2.8%" }} className=" backColor">
          <BsChevronLeft size={40} className="LeftArrow" />
        </div>
      </div>
      <div onClick={handleArrowRClick}>
        <div style={{ marginRight: "2.8%" }} className="  end-0 backColor">
          <BsChevronRight size={40} className=" end-0 RightArrow" />
        </div>
      </div>
      <div >
        <LevelCard 
        count={count}
        hovers = {hovers} />
      </div>
    </>
  );
}

