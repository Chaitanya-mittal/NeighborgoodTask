const password_validate = (password) => {
    var re = {
        capital: /(?=.*[A-Z])/,
        length: /(?=.{7,40}$)/,
        specialChar: /[ -\/:-@\[-\`{-~]/,
        digit: /(?=.*[0-9])/,
    };
    let cnt = [];
    if (!password) return cnt;
    if (re.capital.test(password)) {
        cnt.push(0);
    }
    if (re.length.test(password)) {
        cnt.push(1);
    }
    if (re.specialChar.test(password)) {
        cnt.push(2);
    }
    if (re.digit.test(password)) {
        cnt.push(3);
    }

    passValidation = validationChecks;

    cnt.map((c) => {
        passValidation[c].check = "on";
    })
    return cnt;
};

export const confirmPasswordFunc = (password1, password2) => {
    return password1 === password2;
}

export {
    password_validate
};
export let passValidation = [{
    check: "off",
    msg: "Atleast one Uppercase letter"
}, {
    check: "off",
    msg: "Contains Atleast 7 letters"
}, {
    check: "off",
    msg: "Atleast one Symbol "
}, {
    check: "off",
    msg: "Atleast one Number"
}]

const validationChecks = [{
    check: "off",
    msg: "Atleast one Uppercase letter"
}, {
    check: "off",
    msg: "Contains Atleast 7 letters"
}, {
    check: "off",
    msg: "Atleast one Symbol "
}, {
    check: "off",
    msg: "Atleast one Number"
}]