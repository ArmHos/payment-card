function deleteSpaces(code) {
    return code
        .split("")
        .filter((letter) => letter !== " ")
        .join("");
}

export default deleteSpaces;