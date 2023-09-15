import { useDispatch, useSelector } from "react-redux";

const SenderDate = ({ changeInputValues }) => {
  const dispatch = useDispatch();
  const dateValue = useSelector((state) => {
    return state.inputValues.dateValue;
  });

  return (
    <div className="date">
      <input
        type="text"
        placeholder="yy/mm"
        value={dateValue}
        maxLength={5}
        onChange={(e) => {
          let value = e.target.value;
          value = value.replace(/[^0-9]/g, "");
          value = value.replace(/(.{2})/g, "$1/");
          if (value.endsWith("/")) {
            value = value.slice(0, -1);
          }
          dispatch(changeInputValues("dateValue", value));
        }}
        required
      />
    </div>
  );
};

export default SenderDate;
