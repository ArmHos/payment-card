function checkTheReciever(data, code, notify) {
    let filteredData = data.filter((item) => item.code.main_code === code);
    if (filteredData.length !== 0) {
        return true;
    } else {
        notify("The reciever card code is wrong please check it!!!", 0);
        return false;
    }
}

export default checkTheReciever;