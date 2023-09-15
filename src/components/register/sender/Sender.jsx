import SenderBalance from "./sender-balance/SenderBalance";
import SenderCardType from "./sender-card-type/SenderCardType";
import SenderCode from "./sender-code/SenderCode";
import SenderCVV from "./sender-cvv/SenderCVV";
import SenderDate from "./sender-date/SenderDate";
import SenderName from "./sender-name/SenderName";
import SenderSurname from "./sender-surname/SenderSurname";

const Sender = ({ changeInputValues, cardValidation }) => {
  return (
    <>
      <div className="sender-title title">Sender Info</div>

      <div className="sender">
        <SenderName changeInputValues={changeInputValues} />
        <SenderSurname changeInputValues={changeInputValues} />
        <SenderCardType changeInputValues={changeInputValues}/>
        <SenderCode cardValidation={cardValidation} />
        <SenderDate changeInputValues={changeInputValues} />
        <SenderCVV changeInputValues={changeInputValues} />
        <SenderBalance changeInputValues={changeInputValues} />
      </div>
    </>
  );
};

export default Sender;
