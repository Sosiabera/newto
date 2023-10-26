import "./arrow.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
export default function Arrow({ slide }) {
  return (
    <>
      <div
        style={{ marginLeft: "2.8%" }}
        className="position-absolute top-50 start-0 translate-middle-y backColor"
        onClick={() => {
          slide("-");
        }}
      >
        <BsChevronLeft
          size={40}
          className="position-absolute top-50 start-0 translate-middle-y LeftArrow"
          onClick={() => {
            slide("-");
          }}
        />
      </div>

      <div
        style={{ marginRight: "2.8%" }}
        className="position-absolute top-50 end-0 translate-middle-y backColor"
        onClick={() => {
          slide("+");
        }}
      >
        <BsChevronRight
          size={40}
          className="position-absolute top-50 end-0 translate-middle-y RightArrow"
          onClick={() => {
            slide("+");
          }}
        />
      </div>
    </>
  );
}
onMouseEnter={() => {
  sethovers((prev) => !prev);
}}
onMouseLeave={() => {
  sethovers((prev) => !prev);
}}
<Slide
direction="right"
in={hovers}
container={refs.current}
mountOnEnter
unmountOnExit
>
