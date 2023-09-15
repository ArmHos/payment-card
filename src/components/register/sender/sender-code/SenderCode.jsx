import { useDispatch, useSelector } from "react-redux";

const SenderCode = ({ cardValidation }) => {
  const codeValue = useSelector((state) => {
    return state.inputValues.codeValue;
  });
  const dispatch = useDispatch();

  return (
    <div className="code">
      <input
        type="text"
        placeholder="0000 0000 0000 0000"
        maxLength={19}
        value={codeValue}
        onChange={(e) => {
          cardValidation(e, undefined, dispatch);
        }}
      />
    </div>
  );
};

export default SenderCode;
