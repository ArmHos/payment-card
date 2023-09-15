import { useDispatch, useSelector } from "react-redux";

const SenderBalance = ({ changeInputValues }) => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => {
    return state.inputValues.balance;
  });
  
  return (
    <div className="balance">
      <input
        type="number"
        placeholder="Balance"
        value={balance}
        onChange={(e) => {
          dispatch(changeInputValues("balance", e.target.value));
        }}
        required
      />
    </div>
  );
};

export default SenderBalance;
