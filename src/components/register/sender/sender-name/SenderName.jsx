import { useDispatch, useSelector } from "react-redux";

const SenderName = ({ changeInputValues }) => {
  const dispatch = useDispatch();
  const nameValue = useSelector((state) => {
    return state.inputValues.nameValue;
  });
  return (
    <div className="name">
      <input
        type="text"
        placeholder="Name"
        value={nameValue}
        onChange={(e) => {
          dispatch(changeInputValues("nameValue", e.target.value));
        }}
        required
      />
    </div>
  );
};

export default SenderName;
