import { useContext } from "react";
import "./Header.css";
import Buna from "../buna";
import {} from "react-icons/fa";
import Slider from "../../assets/slider/Slider";
import { MyContext } from "../../assets/context/AppContext";
import { useState } from "react";
import { useEffect } from "react";

const db = [
  {
    name: "ብሔራዊ",
    q1: "gjgwvdgh",
    q2: "wertyuikj",
    image: "/image/photo_2023-10-08_03-57-33.jpg",
    q1complete: 100,
    q2complete: 88,
    q3complete: 0,
  },
  {
    name: "መርካቶ",
    q1: "abcdefg",
    q2: "wertyuikj",
    image: "/image/photo_2023-10-08_03-57-33.jpg",
    q1complete: 0,
    q2complete: 100,
    q3complete: 0,
  },
  {
    name: "ፒያሳ",
    q1: "hijklmnop",
    q2: "wertyuikj",
    image: "/image/photo_2023-10-08_03-57-33.jpg",
    q1complete: 0,
    q2complete: 77,
    q3complete: 67,
  },
  {
    name: "4ኪሎ",
    q1: "qrstuv",
    q2: "wertyuikj",
    image: "/image/photo_2023-10-08_03-57-33.jpg",
    q1complete: 67,
    q2complete: 100,
    q3complete: 34,
  },
];



const Header = (prop) => {
    let index = 0;
  for (; index < db.length; index++) {
    if (db[index].name === prop.prop) {
      break;
    }
  }
  const contentData = [
    {
      letter: "ሀ",
      title: "q1",
      textq: db[index].q1,
      complete: db[index].q1complete,
    },
    {
      letter: "ለ",
      title: "q2",
      textq: db[index].q2,
      complete: db[index].q2complete,
    },
    {
      letter: "ሐ",
      title: "q3",
      textq: db[index].image,
      complete: db[index].q3complete,
    },
  ];

  const { activeSlideIndex } = useContext(MyContext);
  const [answer,setanswer] =useState("")

  

  const handleClass = (activeSlideIndex) => {
    const { letter, textq, complete  } = contentData[activeSlideIndex] || {};

    if (letter && textq) {
      return (
        <div>
          <h1 className="title">{prop.prop}</h1>

          <div className=" quesion ">
            <p className={`textq ${textq}`} data-textq={textq}>
              {textq}
            </p>
          </div>
          
        <div className="Ibuna">
        <Buna completes={ complete} />
        </div>

       <form>
        <input 
        type="text"
        onChange={(e)=> setanswer(e.target.value)}
        />
       </form>

        </div>
      );
    }

    return null;
  };

  const classChange = handleClass(activeSlideIndex);

  return (
    <div className="flex items-center mt-[40px]">
      {/*text contet */}
      <div className="w-1/2 pl-[140px]">
        {classChange}
      </div>

      <div className="w-1/2 flex flex-col items-end justify-end relative">
        <div>
          <Slider />
        </div>

        <div>Socila icons here</div>
      </div>
    </div>
  );
};

export default Header;
