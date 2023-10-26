import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Qcard.css";
import Buna from "./buna";
export default function Qcard() {
  const location = useLocation();
  const state = location.state;
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

  let index = 0;
  for (; index < db.length; index++) {
    if (db[index].name === state) {
      break;
    }
  }

  const [cards] = useState([
    {
      id: "first",
      title: "card1",
      q: db[index].q1,
      complete: db[index].q1complete,
    },

    {
      id: "second",
      title: "card2",
      q: db[index].q2,
      complete: db[index].q2complete,
    },
    {
      id: "third",
      title: "card3",
      q: db[index].image,
      complete: db[index].q3complete,
    },
  ]);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <style>{"body { background-color: #5f878b; }"}</style>
        </Helmet>
        <section className="sec">
          <div className="qcontainer">
            <h1 className="qname">{state} </h1>
            <div className="qcards">
              {cards.map((card, i) => (
                <div key={i} id={card.id} className="qcard">
                  <h3>{card.title}</h3>
                  <p>{card.q}</p>
                  <Buna completes={card.complete} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
}
