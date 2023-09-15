import { useDispatch, useSelector } from "react-redux";

const SenderCVV = ({ changeInputValues }) => {
  const dispatch = useDispatch();
  const cvc = useSelector((state) => {
    return state.inputValues.cvc;
  });

  return (
    <div className="cvv">
      <input
        type="number"
        placeholder="CVV"
        maxLength={3}
        value={cvc}
        onChange={(e) => {
          let value = e.target.value;
          if (value.length > 3) {
            value = value.slice(0, 3);
          }
          dispatch(changeInputValues("cvc", value));
        }}
        required
      />
    </div>
  );
};

export default SenderCVV;
