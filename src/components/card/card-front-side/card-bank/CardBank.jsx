import { useSelector } from "react-redux";
import bank1 from "../../../../Assets/Images/Logo.png";
import bank2 from "../../../../Assets/Images/bank-green.png";

const CardBank = () => {
  const cardType = useSelector((state) => state.inputValues.card_type);

  return (
    <div className="card-bank">
      <div
        className="card-bank-logo"
        style={{
          backgroundImage:
            cardType === "visa" ? `url(${bank2})` : `url(${bank1})`,
        }}
      ></div>
    </div>
  );
};

export default CardBank;
