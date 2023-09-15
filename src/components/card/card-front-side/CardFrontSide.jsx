import { useSelector } from "react-redux";
import CardBank from "./card-bank/CardBank";
import CardChip from "./card-chip/CardChip";
import CardNumber from "./card-number/CardNumber";
import CardDate from "./card-date/CardDate";
import CardLogo from "./card-logo/CardLogo";

const CardFrontSide = () => {
  const inputValues = useSelector((state) => {
    return state.inputValues;
  });

  let { codeValue, dateValue, nameValue, surnameValue } = inputValues;

  return (
    <div className="card-front-side">
      <CardBank />
      <CardChip />
      <CardNumber codeValue={codeValue} />
      <CardDate dateValue={dateValue} />
      <CardLogo nameValue={nameValue} surnameValue={surnameValue} />
    </div>
  );
};

export default CardFrontSide;
