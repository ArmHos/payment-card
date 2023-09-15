import deleteSpaces from "./deleteSpaces.js";

function checkTheSender(userInformation, inputValues, notify) {
    for (const key in userInformation) {
        if (key === "codeValue") {
            inputValues[key] = deleteSpaces(inputValues[key]);
        }
        if (userInformation[key] !== inputValues[key] && key !== "balance") {
            // notify("We don't have such user please check the inputs", 0);
            // console.log(true);
            notify(
                `The ${key.includes("V")
                    ? key
                        .slice(0, key.indexOf("V"))
                        .split("")
                        .map((letter, i) => {
                            if (i === 0) {
                                letter = letter.toUpperCase();
                            }
                            return letter;
                        }).join("")
                    : key
                } field is wrong!!!`,
                2
            );
            return false;
        }
    }
    return true;
}

export default checkTheSender;