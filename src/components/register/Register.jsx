import "./Register.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sender from "./sender/Sender";
import Reciever from "./reciever/Reciever";
import SendButton from "./send-button/SendButton";

const Register = () => {
  function changeInputValues(key, value) {
    return {
      type: "change_value",
      payload: {
        key,
        value,
      },
    };
  }

  const cardValidation = (e, user, dispatch) => {
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, "");
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    if (!user) {
      dispatch(changeInputValues("codeValue", value));
    } else {
      dispatch(changeInputValues("secondCodeValue", value));
    }
  };

  const notify = (message, type) => {
    switch (type) {
      case 0:
        toast.error(`${message}`);
        break;
      case 1:
        toast.success(`${message}`);
        break;
      case 2:
        toast.warning(`${message}`);
        break;
      default:
        toast(`${message}`);
        break;
    }
  };
  return (
    <div className="register-blank">
      <form>
        <Sender
          changeInputValues={changeInputValues}
          cardValidation={cardValidation}
        />
        <Reciever cardValidation={cardValidation} />
        <SendButton notify={notify} />
        <ToastContainer />
      </form>
    </div>
  );
};

export default Register;
