import { useContext } from "react";
import Header from "../header/Header";
import "./Home.css";
import { MyContext } from "../../assets/context/AppContext";

const Home = () => {
  const { activeSlideIndex } = useContext(MyContext);

  const handleClass = (activeSlideIndex) => {
    switch (activeSlideIndex) {
      case 0:
        return "bgContainer1";
      case 1:
        return "bgContainer2";
      case 2:
        return "bgContainer3";
      default:
        return "bgContainer1";
    }
  };

  const classChnage = handleClass(activeSlideIndex);

  return (
    <div className={`${classChnage} h-[1080px] overflow-hidden`} id="home">
      <Header />
    </div>
  );
};

export default Home;
