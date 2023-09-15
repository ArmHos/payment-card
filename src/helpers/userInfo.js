function userInfo(fields) {
    return {
        nameValue: fields.name,
        surnameValue: fields.surname,
        codeValue: fields.code.main_code,
        dateValue: `${fields.date.year}/${fields.date.month}`,
        balance: fields.balance + "",
        cvc: fields.code.cvc + "",
    };
}

export default userInfo;