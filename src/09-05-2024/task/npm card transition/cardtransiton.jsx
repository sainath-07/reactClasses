import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./cardtransition.css";

const Cardtransition = () => {
  const [array, updatearray] = useState([
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      text: "Parrot",
      type: "birds",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1613298209752-5644a907c101?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      text: "bats",
      type: "Mammal",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1554555263-f440a3f535f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      text: "Turtles",
      type: "reptiles",
    },
    {
      id: 4,
      url: "https://plus.unsplash.com/premium_photo-1661859445943-0d14d6faf230?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      text: "Bees",
      type: "insects",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1502031176098-2e91ccc16e59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      text: "Parrot",
      type: "Bird",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1596296455028-bb216ae02ff7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      text: "Fly",
      type: "insects",
    },
  ]);

  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (id) => {
    if (flippedCards.includes(id)) {
      setFlippedCards(flippedCards.filter((value) => value != id));
    } else {
      setFlippedCards([...flippedCards, id]);
    }
  };

  return (
    <>
      <div className="d-flex gap-5 container-fluid  justify-content-center flex-wrap">
        {array.map((cards) => {
          const { id, url, text, content, type } = cards;
          return (
            <>
              <ReactCardFlip
                key={id}
                flipDirection="horizontal"
                isFlipped={flippedCards.includes(id)}
              >
                {/* front */}
                <div
                  className="cardfront d-flex mx-2 "
                  onClick={() => handleCardClick(id)}
                >
                    <img src={url} width={"100%"} height={"100%"} alt="" />
                </div>

                {/* back */}
                <div  className="cardfront d-flex mx-2 border border-danger text-center"
                  onClick={() => handleCardClick(id)}>
                    <div className="d-flex bg-light flex-column pt-4 px-2">

                    <p className="border py-2 bg-dark text-white "><span>Animal Name : </span>{text}</p>
                    <p className="border py-2  bg-dark text-white "><span>Animal Type : </span>{type}</p>
                    <p className="border py-2  bg-dark text-white">{content}</p>
                   
                    </div>

                  </div>
              </ReactCardFlip>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cardtransition;
