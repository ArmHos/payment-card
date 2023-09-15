import { useSelector } from "react-redux";
import visaLogo from "../../../../Assets/Images/hologram.png";
import masterCardLogo from "../../../../Assets/Images/master-logo.png";

const CardLogo = ({ nameValue, surnameValue }) => {
  const cardType = useSelector((state) => state.inputValues.card_type);

  return (
    <div className="card-logo">
      <div className="name-surname">
        <span>{`${nameValue ? nameValue : "Name"} ${
          surnameValue ? surnameValue : "Surname"
        }`}</span>
      </div>
      <div
        className="logo"
        style={{
          backgroundImage:
            cardType === "visa" ? `url(${visaLogo})` : `url(${masterCardLogo})`,
        }}
      ></div>
    </div>
  );
};

export default CardLogo;
