function checkTheBalance(senderBalance, userInfoBalance, notify) {
    if (
        senderBalance <= userInfoBalance &&
        userInfoBalance > 0 &&
        senderBalance > 0
    ) {
        return true;
    } else {
        notify("You don't have such money to complete the tranfer.", 0);
        return false;
    }
}

export default checkTheBalance;