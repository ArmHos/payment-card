// FaCcVisa
import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import visa from "../../../../Assets/Images/hologram.png";
import master from "../../../../Assets/Images/master-logo.png";

const SenderCardType = ({ changeInputValues }) => {
  const [open, setOpen] = useState(false);
  const cardType = useSelector((state) => state.inputValues.card_type);
  const dispatch = useDispatch();

  const openSelecttionDiv = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="sender-card-type">
      <div className="sender-card-type-placeholder">
        <div className="sender-card-type-placeholder-card-type">
          <img src={cardType === "visa" ? visa : master} alt="card-type" />
          <span>{cardType}</span>
        </div>
        <div className="icon">
          <AiOutlineArrowDown onClick={openSelecttionDiv} />
        </div>
      </div>

      <div className="cards" style={{ display: !open ? "none" : "block" }}>
        <div
          className="visa"
          onClick={(e) => {
            dispatch(changeInputValues("card_type", "visa"));
            setOpen(false);
          }}
          style={{
            background:
              cardType === "visa"
                ? "linear-gradient(-20deg, #616161 0%, #9bc5c3 100%)"
                : " #31353f",
          }}
        >
          <div className="visa-svg"></div>
          <span>Visa</span>
        </div>
        <div
          className="master-card"
          onClick={(e) => {
            dispatch(changeInputValues("card_type", "master card"));
            setOpen(false);
          }}
          style={{
            background:
              cardType !== "visa"
                ? "linear-gradient(-20deg, #616161 0%, #9bc5c3 100%)"
                : " #31353f",
          }}
        >
          <div className="master-card-svg"></div>
          <span>Master Card</span>
        </div>
      </div>
    </div>
  );
};

export default SenderCardType;
