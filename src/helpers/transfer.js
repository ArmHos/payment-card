function transfer(senderCode, recieverCode, balance, notify,dispatch) {
    if (senderCode === recieverCode) {
        notify("You can't transfer money to the same user card", 0);
        return false;
    } else {
        const data = JSON.parse(localStorage.getItem("data"));
        const sender = data.filter((user) => user.code.main_code === senderCode);
        const reciever = data.filter(
            (user) => user.code.main_code === recieverCode
        );
        const senderNewBalance = sender[0].balance - balance;
        const recieverNewBalance = reciever[0].balance + +balance;

        const updatedData = data.map((user) => {
            if (user.id === sender[0].id) {
                return {
                    ...user,
                    balance: senderNewBalance,
                };
            } else if (user.id === reciever[0].id) {
                return {
                    ...user,
                    balance: recieverNewBalance,
                };
            }
            return user;
        });
        console.log(updatedData);
        localStorage.setItem("data", JSON.stringify(updatedData));
        notify("You succsesfully complete the transfer.", 1);
        setTimeout(() => {
            dispatch({
                type:"clear_all_inputs"
            })
        },1000)
    }
}

export default transfer;