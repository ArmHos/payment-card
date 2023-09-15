import { useDispatch, useSelector } from "react-redux";
import deleteSpaces from "../../../helpers/deleteSpaces";
import userInfo from "../../../helpers/userInfo";
import checkTheSender from "../../../helpers/checkTheSender";
import checkTheReciever from "../../../helpers/checkTheReciever";
import checkTheBalance from "../../../helpers/checkTheBalance";
import transfer from "../../../helpers/transfer";

const SendButton = ({ notify }) => {
  const inputValues = useSelector((state) => {
    return state.inputValues;
  });
  const dispatch = useDispatch();
  const findUser = (code) => {
    const data = JSON.parse(localStorage.getItem("data"));
    let mainCode = deleteSpaces(code);
    const filteredData = data.filter(
      (item) => item.code.main_code === mainCode
    );
    if (filteredData.length !== 0) {
      const userInformation = userInfo(filteredData[0]);
      const senderInfo = checkTheSender(userInformation, inputValues, notify);
      const recieverInfo = checkTheReciever(
        data,
        deleteSpaces(inputValues.secondCodeValue),
        notify
      );
      const balanceInfo = checkTheBalance(
        inputValues.balance,
        filteredData[0].balance,
        notify
      );
      console.log(senderInfo, recieverInfo, balanceInfo);
      if (senderInfo && recieverInfo && balanceInfo) {
        return true;
      } else {
        return false;
      }
    } else {
      notify("The card code is wrong we don't have such user.", 0);
      return false;
    }
  };

  return (
    <button
      className="send-button"
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        for (const key in inputValues) {
          if (!inputValues[key].trim()) {
            notify(
              `The ${
                key.includes("V") ? key.slice(0, key.indexOf("V")) : key
              } field is empty`,
              2
            );
            return;
          }
        }
        //
        if (findUser(inputValues.codeValue)) {
          transfer(
            deleteSpaces(inputValues.codeValue),
            deleteSpaces(inputValues.secondCodeValue),
            inputValues.balance,
            notify,
            dispatch
          );
        } else {
          console.log("Nooo");
        }
      }}
    >
      Send
    </button>
  );
};

export default SendButton;