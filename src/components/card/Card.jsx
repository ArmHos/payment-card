import "./Card.scss";
import { useState } from "react";
import CardFrontSide from "./card-front-side/CardFrontSide";
import CardBackSide from "./card-back-side/CardBackSide";
import masterCard from "../../Assets/Images/master-card.png";
import visa from "../../Assets/Images/visa-special.png";
import { useSelector } from "react-redux";

const Card = () => {
  const [reverse, setReverse] = useState(false);
  const cardType = useSelector((state) => state.inputValues.card_type);

  return (
    <div>
      {!reverse && (
        <div
          className="card"
          onClick={() => {
            setReverse((prev) => !prev);
          }}
          style={{
            backgroundImage:
              cardType === "visa" ? `url(${visa})` : `url(${masterCard})`,
          }}
        >
          <CardFrontSide />
        </div>
      )}
      {reverse && (
        <div
          className="card"
          onClick={() => {
            setReverse((prev) => !prev);
          }}
          style={{
            backgroundImage:
              cardType === "visa" ? `url(${visa})` : `url(${masterCard})`,
          }}
        >
          <CardBackSide />
        </div>
      )}
    </div>
  );
};

export default Card;
