import { useDispatch, useSelector } from "react-redux";

const SenderSurname = ({ changeInputValues }) => {
  const dispatch = useDispatch();
  const surnameValue = useSelector((state) => {
    return state.inputValues.surnameValue;
  });
  return (
    <div className="surname">
      <input
        type="text"
        placeholder="Surname"
        value={surnameValue}
        onChange={(e) => {
          dispatch(changeInputValues("surnameValue", e.target.value));
        }}
        required
      />
    </div>
  );
};

export default SenderSurname;
