import { useDispatch, useSelector } from "react-redux";

const Reciever = ({ cardValidation }) => {
  const secondCodeValue = useSelector((state) => {
    return state.inputValues.secondCodeValue;
  });

  const dispatch = useDispatch();

  return (
    <>
      <div className="reciever-title title">Reciever Info</div>
      <div className="reciever">
        <div className="reciever-card-code">
          <input
            type="text"
            placeholder="Reciever card code"
            maxLength={19}
            value={secondCodeValue}
            onChange={(e) => {
              cardValidation(e, 1, dispatch);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Reciever;
