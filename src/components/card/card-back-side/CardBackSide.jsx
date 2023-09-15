import { useSelector } from "react-redux";
import visaLogo from "../../../Assets/Images/hologram.png";
import masterCardLogo from "../../../Assets/Images/master-logo.png";

const CardBackSide = () => {
  const cvv = useSelector((state) => {
    return state.inputValues.cvc;
  });
  const cardType = useSelector((state) => state.inputValues.card_type);

  return (
    <div className="card-back-side">
      <div className="card-line-throgh" style={{backgroundColor:cardType === "visa" ? "gray":"black"}}></div>
      <div className="card-cvv">
        <div
          className="hologram"
          style={{
            backgroundImage:
              cardType === "visa"
                ? `url(${visaLogo})`
                : `url(${masterCardLogo})`,
          }}
        ></div>
        <div className="cvv">
          <span>{cvv}</span>
        </div>
      </div>
    </div>
  );
};

export default CardBackSide;
