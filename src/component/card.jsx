import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import styled, { keyframes } from "styled-components";
import Buna from "./buna";
import { FaLock } from "react-icons/fa";


export default function LevelCard({count , hovers }) {
  //the database
  let ImgProp = [
    {
      name: "ብሔራዊ",
      img: "/image/final beharaw 2.png",
      Level: "፩",
      q1complete: 100,
      q2complete: 100,
      q3complete: 100,
      min: 0,
    },
    {
      name: "4ኪሎ",
      img: "/image/4-kilo 2.png",
      Level: "፪",
      q1complete: 100,
      q2complete: 100,
      q3complete: 34,
      min: 0,
    },
    {
      name: "ፒያሳ",
      img: "/image/piassa 2.png",
      Level: "፫",
      q1complete: 25,
      q2complete: 56,
      q3complete: 100,
      min: 0,
    },
    {
      name: "4ኪሎ",
      img: "/image/4-kilo 2.png",
      Level: "፬",
      q1complete: 0,
      q2complete: 0,
      q3complete: 0,
      min: 300,
    },
    {
      name: "ብሄራዊ",
      img: "/image/4-kilo 2.png",
      Level: "፭",
      q1complete: 0,
      q2complete: 0,
      q3complete: 0,
      min: 600,
    },
    {
      name: "ብሄራዊ",
      img: "/image/final beharaw 2.png",
      Level: "፮",
      q1complete: 0,
      q2complete: 0,
      q3complete: 0,
      min: 900,
    },
    {
      name: "ብሄራዊ",
      img: "/image/final beharaw 2.png",
      Level: "፮",
      q1complete: 0,
      q2complete: 0,
      q3complete: 0,
      min: 900,
    },
    {
      name: "ብሄራዊ",
      img: "/image/final beharaw 2.png",
      Level: "፮",
      q1complete: 0,
      q2complete: 0,
      q3complete: 0,
      min: 900,
    },
    {
      name: "ብሄራዊ",
      img: "/image/final beharaw 2.png",
      Level: "፮",
      q1complete: 0,
      q2complete: 0,
      q3complete: 0,
      min: 900,
    },
  ];
 
  //holds the level to be displayed
  let NewArr = [];

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
 
  //for alert
  const [isAlertVisible, setIsAlertVisible] = useState(false);
    //the buna need to open and the name of the level
    let [diff, setdiff] = useState(0);
    let [name, setname] = useState("");

  // to seend to next page
  let navigate = useNavigate();

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
  const handleclickToGame = () => {
    navigate("ExtraGame");
  };


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


      <Move slide={hovers}>
        
          <div className="parent">
            {NewArr.map((arr, index) => (
              <div key={index} className="ImgPlace">
                <h1 className="Levelname ">{arr.Level}</h1>
                <div className="persp">
                  <div
                    className={totalvalue < arr.min ? "levelsactive" : "levels"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="#081a31"
                        fillOpacity={1} 
                        d="M0,224L6.2,197.3C12.3,171,25,117,37,106.7C49.2,96,62,128,74,133.3C86.2,139,98,117,111,128C123.1,139,135,181,148,176C160,171,172,117,185,96C196.9,75,209,85,222,90.7C233.8,96,246,96,258,96C270.8,96,283,96,295,85.3C307.7,75,320,53,332,90.7C344.6,128,357,224,369,234.7C381.5,245,394,171,406,154.7C418.5,139,431,181,443,192C455.4,203,468,181,480,144C492.3,107,505,53,517,74.7C529.2,96,542,192,554,245.3C566.2,299,578,309,591,304C603.1,299,615,277,628,256C640,235,652,213,665,208C676.9,203,689,213,702,186.7C713.8,160,726,96,738,90.7C750.8,85,763,139,775,181.3C787.7,224,800,256,812,256C824.6,256,837,224,849,213.3C861.5,203,874,213,886,186.7C898.5,160,911,96,923,90.7C935.4,85,948,139,960,165.3C972.3,192,985,192,997,186.7C1009.2,181,1022,171,1034,186.7C1046.2,203,1058,245,1071,261.3C1083.1,277,1095,267,1108,245.3C1120,224,1132,192,1145,197.3C1156.9,203,1169,245,1182,245.3C1193.8,245,1206,203,1218,160C1230.8,117,1243,75,1255,69.3C1267.7,64,1280,96,1292,96C1304.6,96,1317,64,1329,53.3C1341.5,43,1354,53,1366,85.3C1378.5,117,1391,171,1403,202.7C1415.4,235,1428,245,1434,250.7L1440,256L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"
                      ></path>
                    </svg>

                    <img
                      className="CardImg "
                      src={arr.img}
                      alt={arr.name}
                      onClick={() => handleclick(arr.name, arr.min, arr.Level)}
                      ref={refs}
                    />
                  </div>
                </div>

                <div className="scoffee">
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
       
        <button className="ExtraGame" onClick={() => handleclickToGame()}>
          P L A Y
          <div id="clip">
            <div id="leftTop" className="corner"></div>
            <div id="rightBottom" className="corner"></div>
            <div id="rightTop" className="corner"></div>
            <div id="leftBottom" className="corner"></div>
          </div>
          <span id="rightArrow" className="arrow"></span>
          <span id="leftArrow" className="arrow"></span>
        </button>
      </Move>
      <div className="wave">
          <p></p>

        </div>
    </>
  );
}
const slides = keyframes`
  from{
    opacity:20;
    transform: translateX(70%);
  }
  to{
    opacity:100;
    transform: translateX(0);
  }`;
const slideL = keyframes`
  from{
    opacity:20;
    transform: translateX(-70%);
  }
  to{
    opacity:100;
    transform: translateX(0);
  }`;

const Move = styled.div`
  animation-name: ${(props) => {
    if (props.slide === "right") {
      return slides;
    } else if (props.slide === "left") {
      return slideL;
    }
  }};
  animation-duration: 1s;
`;
