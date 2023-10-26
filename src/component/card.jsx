import {  useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import styled, {keyframes} from "styled-components";
import Buna from "./buna";
import { FaLock } from "react-icons/fa";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function LevelCard() {
  //the database
  let ImgProp = [
    {
      name: "ብሔራዊ",
      img: "/image/final beharaw1.png",
      Level: "፩",
      q1complete: 100,
      q2complete: 100,
      q3complete: 100,
      min: 0,
    },
    {
      name: "መርካቶ",
      img: "/image/markato1.png",
      Level: "፪",
      q1complete: 100,
      q2complete: 100,
      q3complete: 34,
      min: 0,
    },
    {
      name: "ፒያሳ",
      img: "/image/piassa.png",
      Level: "፫",
      q1complete: 25,
      q2complete: 56,
      q3complete: 100,
      min: 0,
    },
    {
      name: "4ኪሎ",
      img: "/image/4kilo.png",
      Level: "፬",
      q1complete: 0,
      q2complete: 0,
      q3complete: 0,
      min: 300,
    },
    {
      name: "ብሄራዊ",
      img: "/image/4kilo.png",
      Level: "፭",
      q1complete: 0,
      q2complete: 0,
      q3complete: 0,
      min: 600,
    },
    {
      name: "ብሄራዊ",
      img: "/image/final beharaw.png",
      Level: "፮",
      q1complete: 0,
      q2complete: 0,
      q3complete: 0,
      min: 900,
    },
    {
      name: "ብሄራዊ",
      img: "/image/final beharaw.png",
      Level: "፮",
      q1complete: 0,
      q2complete: 0,
      q3complete: 0,
      min: 900,
    },
    {
      name: "ብሄራዊ",
      img: "/image/final beharaw.png",
      Level: "፮",
      q1complete: 0,
      q2complete: 0,
      q3complete: 0,
      min: 900,
    },
    {
      name: "ብሄራዊ",
      img: "/image/final beharaw.png",
      Level: "፮",
      q1complete: 0,
      q2complete: 0,
      q3complete: 0,
      min: 900,
    },
  ];
  //end level
  const [count, setcount] = useState(3);
  //holds the level to be displayed
  let NewArr = [
    {
      id: "first",
    },
    {
      id: "second",
    },
    {
      id: "third",
    },
  ];
  //index of the above, only till 2
  let num = 0;
  //adds the level to the display array by looping over the database array
  const handl = (start) => {
    for (; start < count; start++) {
      NewArr[num] = ImgProp[start];
      num++;
    }
  };
  handl(count - 3);

  //total num of buna
  let totalvalue = 0;
  const refs = useRef();
  const [hovers, sethovers] = useState("");
  //for alert
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  // to seend to next page
  let navigate = useNavigate();
  //the buna need to open and the name of the level
  let [diff, setdiff] = useState(0);
  let [name, setname] = useState("");
  //send to the next page with the level name if buna is enough if not set alert
  const handleclick = (level, min, name) => {
    if (totalvalue >= min) {
      navigate("level", { state: level });
    } else {
      setdiff(min - totalvalue);
      setname(name);
      setIsAlertVisible(true);
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 2500);
    }
  };
  clearTimeout(handleclick);
  const handleArrowRClick =()=>{
    if (count != ImgProp.length) {
      setcount((prevcount) => prevcount + 3);
    } else {
      setcount(3);
    }
    sethovers("right");
     setTimeout(() => {
         sethovers("none");
      }, 1000);
  }
   clearTimeout(handleArrowRClick);
  const handleArrowLClick =()=>{
    if (count > 3) {
      setcount((prevcount) => prevcount - 3);
    
    sethovers("left");
         setTimeout(() => {
         sethovers("none");
      }, 1000);}
  }
 clearTimeout(handleArrowLClick);
  return (
    <>
      <div style={{ position: "fixed" }}>
        {isAlertVisible && (
          <Alert variant="outlined" severity="info">
            <AlertTitle>ደረጃ ተቆልፏል</AlertTitle>
            ደረጃ <strong>{name}</strong> ለመክፈት {diff} ቡና ያስፈልጋል
          </Alert>
        )}
      </div>
      <div className="totalbuna">
        <Buna completes={100} />
        <p>{totalvalue}</p>
      </div>
      <div
        onClick={ handleArrowLClick}
      >
        <div
          style={{ marginLeft: "2.8%" }}
          className=" backColor"
        >
          <BsChevronLeft
            size={40}
            className="LeftArrow"
          />
        </div>
      </div>
      <div
        onClick={handleArrowRClick}
      >
        <div
          style={{ marginRight: "2.8%" }}
          className="  end-0 backColor"
        >
          <BsChevronRight
            size={40}
            className=" end-0 RightArrow"
          />
        </div>
      </div>
      <Move slide ={hovers}>
        <div className= "parent">
          <div className="row align-items-start">
            {NewArr.map((arr, index) => (
              <div
                key={index}
                className="col ImgPlace"
                onClick={() => handleclick(arr.name, arr.min, arr.Level)}
              >
                <h1 className="Levelname ">{arr.Level}</h1>
                <div
                  className={totalvalue < arr.min ? "levelsactive" : "levels"}
                >
                  <img
                    className="CardImg  "
                    src={arr.img}
                    alt={arr.name}
                    ref={refs}
                  />
                  {totalvalue >= arr.min && (
                    <h1
                      ref={refs}
                      className="place"
                    >
                      {arr.name}
                    </h1>
                  )}
                </div>
                <div className="coffee">
                  <Buna completes={arr.q1complete} />
                  <Buna completes={arr.q2complete} />
                  <Buna completes={arr.q3complete} />
                </div>
                {totalvalue < arr.min && (
                  <div className="lock">
                    <FaLock size={40} color="#9f9b9b" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        </Move>
    </>
  );
}
const slides =keyframes`
  from{
    opacity:20;
    transform: translateX(70%);
  }
  to{
    opacity:100;
    transform: translateX(0);
  }`
  const slideL =keyframes`
  from{
    opacity:20;
    transform: translateX(-70%);
  }
  to{
    opacity:100;
    transform: translateX(0);
  }`
 
  const Move =styled.div`
  animation-name: ${(props) =>{if(props.slide === "right") { return slides} else if(props.slide === "left") { return slideL} }   };
 animation-duration: 1s;
 `
 
